<script setup lang="ts">

</script>

<template>
  <div class="sticky top-0 border-b z-10">
    <header class="container-wrapper flex items-center justify-between gap-2 bg-background py-4">
      <nav class="flex items-center gap-x-10">
        <NuxtLink style="display: block" to="/" class="text-2xl font-extrabold">
          AIgent
        </NuxtLink>

        <DefaultNavbarMenu />
      </nav>

      <div class="relative flex items-center gap-2">
<!--        <Search />-->

        <div class="flex items-center gap-2 mr-2">
          <Icon name="i-ph-phone" size="20" />
          +998 (77) 999 99 11
        </div>

        <AppSettings />

        <ThemeToggle />
      </div>
    </header>
  </div>
</template>

<style scoped>

</style>
