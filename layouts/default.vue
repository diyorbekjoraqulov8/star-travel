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
  @apply w-full mx-auto 4xl:max-w-[1350px] 3xl:max-w-[1250px] max-w-[1150px] px-6;
}
</style>
