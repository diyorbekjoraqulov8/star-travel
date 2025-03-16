<script setup lang="ts">
</script>

<template>
  <div>
    <DefaultNavbar />
    <main>
      <div class="container-wrapper">
        <slot />
      </div>
    </main>

    <DefaultFooter />
  </div>
</template>

<style lang="css">
.container-wrapper {
  @apply w-full mx-auto 4xl:max-w-[1536px] 3xl:max-w-[1400px] max-w-[1300px] px-6;
}
</style>
