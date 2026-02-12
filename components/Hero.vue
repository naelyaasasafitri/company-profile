<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div ref="blob1" class="absolute top-20 left-20 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl"></div>
      <div ref="blob2" class="absolute bottom-20 right-20 w-96 h-96 bg-accent-400/30 rounded-full blur-3xl"></div>
      <div ref="blob3" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <!-- Badge -->
        <div ref="badgeRef" class="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-8 opacity-0">
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span class="text-sm font-medium text-gray-700">{{ $t('hero.available') }}</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span ref="title1Ref" class="block opacity-0">{{ $t('hero.title') }}</span>
          <span ref="title2Ref" class="block text-gradient opacity-0">{{ $t('hero.titleHighlight') }}</span>
        </h1>

        <!-- Subtitle -->
        <p ref="subtitleRef" class="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto opacity-0">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- CTA Buttons -->
        <div ref="ctaRef" class="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <a
            href="#contact"
            class="btn-primary"
          >
            {{ $t('hero.cta') }}
          </a>
          <a
            href="#about"
            class="btn-secondary"
          >
            {{ $t('hero.learnMore') }}
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div ref="scrollRef" class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0">
      <div class="flex flex-col items-center space-y-2 text-gray-500">
        <span class="text-sm font-medium">{{ $t('hero.scrollDown') }}</span>
        <ChevronDown class="w-6 h-6 animate-bounce" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import gsap from 'gsap'

const blob1 = ref<HTMLElement | null>(null)
const blob2 = ref<HTMLElement | null>(null)
const blob3 = ref<HTMLElement | null>(null)
const badgeRef = ref<HTMLElement | null>(null)
const title1Ref = ref<HTMLElement | null>(null)
const title2Ref = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const scrollRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Animate background blobs
  gsap.to(blob1.value, {
    x: 100,
    y: 50,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  gsap.to(blob2.value, {
    x: -80,
    y: -60,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  gsap.to(blob3.value, {
    x: 60,
    y: -40,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  // Animate content on load
  const tl = gsap.timeline()

  tl.to(badgeRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  })

  tl.to(
    title1Ref.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.4'
  )

  tl.to(
    title2Ref.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.5'
  )

  tl.to(
    subtitleRef.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.5'
  )

  tl.to(
    ctaRef.value,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.5'
  )

  tl.to(
    scrollRef.value,
    {
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.5'
  )

  // Set initial positions
  gsap.set([badgeRef.value, title1Ref.value, title2Ref.value, subtitleRef.value, ctaRef.value], {
    y: 30,
  })
})
</script>

<i18n>
{
  "en": {
    "hero": {
      "available": "Available for new projects",
      "scrollDown": "Scroll down"
    }
  },
  "id": {
    "hero": {
      "available": "Tersedia untuk proyek baru",
      "scrollDown": "Scroll ke bawah"
    }
  }
}
</i18n>
