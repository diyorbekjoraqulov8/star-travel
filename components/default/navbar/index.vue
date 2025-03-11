<script setup lang="ts">

</script>

<template>
  <div class="border-b sticky top-0">
    <header class="container-wrapper flex items-center gap-2 py-4 justify-between bg-background">
      <nav class="flex items-center gap-x-10">
        <NuxtLink  style="display: block" to="/" class="font-extrabold text-2xl">
          AIgent
        </NuxtLink>

        <DefaultNavbarMenu />
      </nav>

      <div class="flex items-center gap-2 relative">
        <Search />

        <AppSettings />

        <ThemeToggle />
      </div>
    </header>
  </div>
</template>

<style scoped>

</style>
