<script setup lang="ts">
const {t} = useI18n()
</script>

<template>
  <div class="default_navbar">
    <header class="container-wrapper relative flex items-center justify-between gap-2 py-4">
      <nav class="flex items-center gap-x-5">
        <LazyLogo />

        <DefaultNavbarMenu />
      </nav>

      <div class="relative flex items-center gap-2">
<!--        <Search />-->

        <div class="flex items-center gap-2 mr-2">
          <Icon name="i-ph-phone" size="20" />
          +998 (97) 170 21 01
        </div>

        <DefaultNavbarLocale />

        <ThemeToggle />
      </div>
    </header>
  </div>
</template>

<style scoped lang="css">
.default_navbar > .container-wrapper:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  transform: translate(-55%, -40%);
  background: radial-gradient(
      circle at center,
      #FF26DC 0%,
      rgba(255, 38, 220, 0.3) 0%,
      rgba(255, 38, 220, 0) 70%
  );
  z-index: -10;
}

@media (max-width: 1000px) {
  .default_navbar > .container-wrapper:before {
    width: 100vw;
    height: 100vw;
    transform: translate(-50%, -40%);
  }
}
</style>
