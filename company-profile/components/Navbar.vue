<template>
  <nav
    ref="navbarRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">C</span>
          </div>
          <span class="text-2xl font-bold text-gradient">Company</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.key"
            :to="item.to"
            class="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
          >
            {{ t(`nav.${item.key}`) }}
          </NuxtLink>

          <!-- Language Switcher -->
          <div class="relative">
            <button
              @click="toggleLanguageMenu"
              class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Globe class="w-5 h-5 text-gray-600" />
              <span class="text-gray-700 font-medium">{{ currentLocale }}</span>
            </button>

            <Transition name="dropdown">
              <div
                v-if="showLanguageMenu"
                class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  @click="switchLanguage(locale.code)"
                  class="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                  :class="locale.code === currentLocale ? 'text-primary-600 bg-gray-50' : 'text-gray-700'"
                >
                  {{ locale.name }}
                </button>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu v-if="!showMobileMenu" class="w-6 h-6 text-gray-700" />
          <X v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div v-if="showMobileMenu" class="md:hidden py-4 border-t border-gray-100">
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="item in navItems"
              :key="item.key"
              :to="item.to"
              @click="showMobileMenu = false"
              class="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              {{ t(`nav.${item.key}`) }}
            </NuxtLink>

            <div class="pt-4 border-t border-gray-100">
              <div class="flex items-center space-x-2">
                <Globe class="w-5 h-5 text-gray-600" />
                <select
                  v-model="currentLocale"
                  @change="switchLanguage(currentLocale)"
                  class="bg-transparent border-0 text-gray-700 font-medium focus:ring-0 cursor-pointer"
                >
                  <option value="en">English</option>
                  <option value="id">Bahasa Indonesia</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Globe, Menu, X } from 'lucide-vue-next'
import { useI18n } from '#i18n'

const { t, locale } = useI18n()

const navbarRef = ref<HTMLElement | null>(null)
const isScrolled = ref(false)
const showMobileMenu = ref(false)
const showLanguageMenu = ref(false)

const navItems = [
  { key: 'home', to: '#home' },
  { key: 'about', to: '#about' },
  { key: 'services', to: '#services' },
  { key: 'portfolio', to: '#portfolio' },
  { key: 'testimonials', to: '#testimonials' },
  { key: 'contact', to: '#contact' },
]

const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'id', name: 'Bahasa Indonesia' },
]

const currentLocale = computed({
  get: () => locale.value,
  set: (value: string) => locale.value = value,
})

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const toggleLanguageMenu = () => {
  showLanguageMenu.value = !showLanguageMenu.value
}

const switchLanguage = (code: string) => {
  locale.value = code
  showLanguageMenu.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
