<template>
  <section id="services" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="section-title opacity-0">{{ $t('services.title') }}</h2>
        <p class="section-subtitle opacity-0">{{ $t('services.subtitle') }}</p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          ref="serviceRef"
          class="card p-8 hover:border-primary-500 border-2 border-transparent opacity-0"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
          >
            <component :is="service.icon" class="w-8 h-8 text-white" />
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-4">{{ $t(`services.list.${index}.title`) }}</h3>

          <p class="text-gray-600 leading-relaxed">
            {{ $t(`services.list.${index}.description`) }}
          </p>

          <a href="#contact" class="inline-flex items-center text-primary-600 font-medium mt-6 hover:text-primary-700 transition-colors">
            {{ $t('services.learnMore') }}
            <ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Monitor,
  Smartphone,
  Palette,
  Cloud,
  Lightbulb,
  Wrench,
  ArrowRight,
} from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref<HTMLElement | null>(null)
const serviceRef = ref<HTMLElement[]>([])

const services = [
  { icon: Monitor },
  { icon: Smartphone },
  { icon: Palette },
  { icon: Cloud },
  { icon: Lightbulb },
  { icon: Wrench },
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

  // Animate service cards with stagger
  gsap.to(serviceRef.value, {
    scrollTrigger: {
      trigger: serviceRef.value,
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
  })

  // Set initial positions
  gsap.set(serviceRef.value, { y: 50 })
})
</script>

<i18n>
{
  "en": {
    "services": {
      "learnMore": "Learn More"
    }
  },
  "id": {
    "services": {
      "learnMore": "Pelajari Lebih Lanjut"
    }
  }
}
</i18n>
