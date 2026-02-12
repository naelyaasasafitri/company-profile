<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">C</span>
            </div>
            <span class="text-2xl font-bold">Company</span>
          </div>
          <p class="text-gray-400">{{ $t('footer.tagline') }}</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-lg mb-4">{{ $t('footer.quickLinks') }}</h4>
          <ul class="space-y-2">
            <li>
              <a href="#about" class="text-gray-400 hover:text-white transition-colors">{{ $t('nav.about') }}</a>
            </li>
            <li>
              <a href="#services" class="text-gray-400 hover:text-white transition-colors">{{ $t('nav.services') }}</a>
            </li>
            <li>
              <a href="#portfolio" class="text-gray-400 hover:text-white transition-colors">{{ $t('nav.portfolio') }}</a>
            </li>
            <li>
              <a href="#contact" class="text-gray-400 hover:text-white transition-colors">{{ $t('nav.contact') }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-bold text-lg mb-4">{{ $t('footer.contact') }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li>{{ $t('contact.info.email').replace('[at]', '@') }}</li>
            <li>{{ $t('contact.info.phone') }}</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© {{ new Date().getFullYear() }} Company. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '#i18n'

const { t } = useI18n()
</script>

<i18n>
{
  "en": {
    "footer": {
      "quickLinks": "Quick Links",
      "contact": "Contact"
    }
  },
  "id": {
    "footer": {
      "quickLinks": "Tautan Cepat",
      "contact": "Kontak"
    }
  }
}
</i18n>
