<script setup lang="ts">

</script>

<template>
  <footer class="container-wrapper h-40 flex gap-6">
    <div>
      <LazyLogo />

      <div class="flex items-center gap-2 mt-2">
        <Icon name="i-ph-phone" size="20" />
        +998 (97) 170 21 01
      </div>
    </div>

    <div class="flex flex-col">
      <NuxtLink to="/products">Tur paketlar</NuxtLink>
      <NuxtLink to="/about">Biz haqimizda</NuxtLink>
      <NuxtLink to="/contact">Biz bilan bog'lanish</NuxtLink>
      <NuxtLink to="/location">Bizning joylashuv</NuxtLink>
    </div>
  </footer>
</template>

<style scoped>

</style>
