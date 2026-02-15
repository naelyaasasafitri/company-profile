<template>
  <section id="contact" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="section-title opacity-0">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle opacity-0">{{ $t('contact.subtitle') }}</p>
      </div>

      <!-- Content -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div ref="formRef" class="bg-gray-50 rounded-3xl p-8 opacity-0">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('contact.form.name') }}
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('contact.form.email') }}
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('contact.form.subject') }}
              </label>
              <input
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('contact.form.message') }}
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">{{ $t('contact.form.send') }}</span>
              <span v-else>{{ $t('contact.form.sending') }}...</span>
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div ref="infoRef" class="space-y-8 opacity-0">
          <div
            v-for="(item, index) in contactInfo"
            :key="index"
            class="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <component :is="item.icon" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">{{ item.label }}</h3>
              <p class="text-gray-600">{{ item.value }}</p>
            </div>
          </div>

          <!-- Social Links -->
          <div class="pt-8">
            <h3 class="font-bold text-gray-900 mb-4">{{ $t('contact.followUs') }}</h3>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
              >
                <component :is="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue'
import { useI18n } from '#i18n'
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()

const headerRef = ref<HTMLElement | null>(null)
const formRef = ref<HTMLElement | null>(null)
const infoRef = ref<HTMLElement | null>(null)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const contactInfo = computed(() => [
  { icon: Mail, label: 'Email', value: t('contact.info.email').replace('[at]', '@') },
  { icon: Phone, label: 'Phone', value: t('contact.info.phone') },
  { icon: MapPin, label: 'Address', value: t('contact.info.address') },
])

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
]

onMounted(() => {
  // Animate header
  gsap.to(headerRef.value, {
    scrollTrigger: {
      trigger: headerRef.value,
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  })

  gsap.fromTo(
    headerRef.value!.querySelectorAll('h2, p'),
    { y: 30 },
    {
      scrollTrigger: {
        trigger: headerRef.value,
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    }
  )

  // Animate form
  gsap.to(formRef.value, {
    scrollTrigger: {
      trigger: formRef.value,
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: 'power3.out',
  })

  // Animate info
  gsap.to(infoRef.value, {
    scrollTrigger: {
      trigger: infoRef.value,
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out',
  })

  // Set initial positions
  gsap.set(formRef.value, { x: -50 })
  gsap.set(infoRef.value, { x: 50 })
})

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000))
  isSubmitting.value = false
  // Reset form
  Object.assign(form, {
    name: '',
    email: '',
    subject: '',
    message: '',
  })
}
</script>

<i18n>
{
  "en": {
    "contact": {
      "followUs": "Follow Us",
      "form": {
        "sending": "Sending"
      }
    }
  },
  "id": {
    "contact": {
      "followUs": "Ikuti Kami",
      "form": {
        "sending": "Mengirim"
      }
    }
  }
}
</i18n>
