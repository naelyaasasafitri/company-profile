<template>
  <section id="portfolio" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="section-title opacity-0">{{ $t('portfolio.title') }}</h2>
        <p class="section-subtitle opacity-0">{{ $t('portfolio.subtitle') }}</p>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in 3"
          :key="index"
          ref="projectRef"
          class="group cursor-pointer opacity-0"
        >
          <div class="card overflow-hidden">
            <!-- Project Image Placeholder -->
            <div class="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <span class="inline-block px-3 py-1 bg-primary-600 text-white text-sm rounded-full mb-3">
                    {{ $t(`portfolio.projects.${index}.category`) }}
                  </span>
                  <h3 class="text-xl font-bold text-white mb-2">
                    {{ $t(`portfolio.projects.${index}.title`) }}
                  </h3>
                </div>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                {{ $t(`portfolio.projects.${index}.title`) }}
              </h3>
              <p class="text-gray-600">
                {{ $t(`portfolio.projects.${index}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <a href="#contact" class="btn-primary">
          {{ $t('portfolio.viewAll') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref<HTMLElement | null>(null)
const projectRef = ref<HTMLElement[]>([])

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

  // Animate project cards with stagger
  gsap.to(projectRef.value, {
    scrollTrigger: {
      trigger: projectRef.value,
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  })

  // Set initial positions
  gsap.set(projectRef.value, { y: 50 })
})
</script>

<i18n>
{
  "en": {
    "portfolio": {
      "viewAll": "View All Projects"
    }
  },
  "id": {
    "portfolio": {
      "viewAll": "Lihat Semua Proyek"
    }
  }
}
</i18n>
