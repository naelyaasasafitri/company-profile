<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Global configuration and setup
useHead({
  htmlAttrs: {
    lang: useI18n().locale.value,
  },
})
</script>
