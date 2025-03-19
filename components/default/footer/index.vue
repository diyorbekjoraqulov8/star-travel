<script setup lang="ts">

</script>

<template>
  <footer class="container-wrapper h-40 flex gap-6 py-4">
    <div>
      <LazyLogo />

      <div class="flex items-center gap-2 mt-2">
        <Icon name="i-ph-phone" size="20" />
        +998 (97) 170 21 01
      </div>
    </div>

    <div class="flex flex-col">
      <NuxtLink to="/products">{{ $t('tourPackages') }}</NuxtLink>
      <NuxtLink to="/about">{{ $t('aboutUs') }}</NuxtLink>
      <NuxtLink to="/contact">{{ $t('contactUs') }}</NuxtLink>
      <NuxtLink to="/location">{{ $t('locationUs') }}</NuxtLink>
    </div>

    <div>

    </div>

    <div class="ml-auto">
      <p class="mb-2">{{ $t('paymentTypes') }}</p>
      <div class="flex gap-2">
        <LazyIconPayme />

        <NuxtImg class="w-[50px] rounded" src="https://www.spot.uz/media/img/2019/04/fWPk2a15549570282085_b.jpg"/>
        <NuxtImg class="w-[50px] rounded" src="https://humocard.uz/upload/medialibrary/208/8x0p9hi3h9jww0flwdm92dayhn0flulj/humo-logo-more.png"/>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
