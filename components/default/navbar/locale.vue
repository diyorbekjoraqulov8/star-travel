<script setup lang="ts">
const {locales, locale} = useI18n()

const router = useRouter()

const localeName = computed(() => locales.value?.find(item => item?.code === locale.value))
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost">
          {{ localeName.name }}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem v-for="(locale, index) in locales" :key="index" @click="() => router.push(locale.code !== 'uz' ? locale.code : '/')">
            <span>{{ locale.name }}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<style scoped>

</style>
