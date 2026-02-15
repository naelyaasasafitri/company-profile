<template>
  <section id="about" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="section-title opacity-0">{{ $t('about.title') }}</h2>
        <p class="section-subtitle opacity-0">{{ $t('about.subtitle') }}</p>
      </div>

      <!-- Content -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Image/Visual -->
        <div ref="visualRef" class="relative opacity-0">
          <div class="aspect-square bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl shadow-2xl overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center text-white p-8">
                <Building2 class="w-24 h-24 mx-auto mb-4 opacity-90" />
                <p class="text-lg font-medium opacity-90">Building the Future</p>
              </div>
            </div>
          </div>

          <!-- Floating Card -->
          <div class="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp class="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p class="text-sm text-gray-500">Growth Rate</p>
                <p class="text-xl font-bold text-gray-900">+250%</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Description & Stats -->
        <div ref="contentRef" class="opacity-0">
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            {{ $t('about.description') }}
          </p>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div
              v-for="(stat, key) in stats"
              :key="key"
              class="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <div class="text-4xl font-bold text-gradient mb-2">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ $t(`about.stats.${key}`) }}</div>
            </div>
          </div>

          <!-- Features List -->
          <ul class="space-y-3">
            <li
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-center space-x-3"
            >
              <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Building2, TrendingUp, CheckCircle } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref<HTMLElement | null>(null)
const visualRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

const stats = {
  clients: { value: '150+' },
  projects: { value: '300+' },
  experience: { value: '10+' },
  team: { value: '50+' },
}

const features = [
  'Expert team with years of experience',
  'Modern tech stack & best practices',
  'Agile development methodology',
  '24/7 support & maintenance',
  'Scalable solutions for growth',
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

  // Animate visual
  gsap.to(visualRef.value, {
    scrollTrigger: {
      trigger: visualRef.value,
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out',
  })

  // Animate content
  gsap.to(contentRef.value, {
    scrollTrigger: {
      trigger: contentRef.value,
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
  })

  // Set initial positions
  gsap.set(visualRef.value, { x: -50 })
  gsap.set(contentRef.value, { x: 50 })
})
</script>
