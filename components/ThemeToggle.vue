<script setup lang="ts">
const colorMode = useColorMode()

function handleChangeTheme(): void {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Button id="themeButton" aria-label="Theme Button" size="icon" variant="ghost" @click="handleChangeTheme">
    <Icon class="theme-icon_moon" name="radix-icons:moon" />
    <Icon class="theme-icon_sun absolute" name="radix-icons:sun" />
  </Button>
</template>

<style lang="css" scoped>
.theme-icon_moon {
  @apply h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0;
}
.theme-icon_sun {
  @apply h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100;
}
</style>
