<template>
  <section id="testimonials" class="py-24 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="section-title text-white opacity-0">{{ $t('testimonials.title') }}</h2>
        <p class="section-subtitle text-white/80 opacity-0">{{ $t('testimonials.subtitle') }}</p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in 3"
          :key="index"
          ref="testimonialRef"
          class="bg-white rounded-2xl p-8 shadow-xl opacity-0"
        >
          <!-- Quote Icon -->
          <Quote class="w-12 h-12 text-primary-200 mb-4" />

          <!-- Review Text -->
          <p class="text-gray-700 mb-6 leading-relaxed">
            "{{ $t(`testimonials.reviews.${index}.text`) }}"
          </p>

          <!-- Author -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
              {{ $t(`testimonials.reviews.${index}.name`).charAt(0) }}
            </div>
            <div>
              <h4 class="font-bold text-gray-900">
                {{ $t(`testimonials.reviews.${index}.name`) }}
              </h4>
              <p class="text-sm text-gray-500">
                {{ $t(`testimonials.reviews.${index}.position`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Quote } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref<HTMLElement | null>(null)
const testimonialRef = ref<HTMLElement[]>([])

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

  // Animate testimonials with stagger
  gsap.to(testimonialRef.value, {
    scrollTrigger: {
      trigger: testimonialRef.value,
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  })

  // Set initial positions
  gsap.set(testimonialRef.value, { y: 50 })
})
</script>
