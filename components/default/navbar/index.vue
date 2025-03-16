<script setup lang="ts">

</script>

<template>
  <div class="sticky top-0 border-b">
    <header class="container-wrapper flex items-center justify-between gap-2 bg-background py-4">
      <nav class="flex items-center gap-x-10">
        <NuxtLink style="display: block" to="/" class="text-2xl font-extrabold">
          AIgent
        </NuxtLink>

        <DefaultNavbarMenu />
      </nav>

      <div class="relative flex items-center gap-2">
        <Search />

        <AppSettings />

        <ThemeToggle />
      </div>
    </header>
  </div>
</template>

<style scoped>

</style>
