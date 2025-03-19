<script setup lang="ts">
import { Sonner } from '@/components/ui/sonner'
import { ConfigProvider } from 'radix-vue'

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#09090b' : '#ffffff')

const { theme, radius } = useCustomize()

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: [
    { rel: 'icon', href: "/startravel-logo-3.png" },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: computed(() => `theme-${theme.value}`),
    style: computed(() => `--radius: ${radius.value}rem;`),
  },
})

const title = 'Startravel – Arzon Sayohatlar, Chiptalar va Eksklyuziv Turlar'
const description = "Startravel – dunyo bo'ylab sayohatlar, arzon chiptalar va eksklyuziv turlarni taqdim etuvchi ishonchli travel agentlik. Bugun sayohatingizni rejalashtiring va eng yaxshi takliflarimizdan foydalaning!"
const imgUrl = "https://instagram.ftas1-1.fna.fbcdn.net/v/t51.2885-19/485002143_1727484274544934_5166117233884926465_n.jpg?_nc_ht=instagram.ftas1-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QFiO43lmrcUB2JUYqx7XfHUcTW75q2-tmYwcIEyKWb3e2Siv-8z9a1gAgHlhyEwcWc&_nc_ohc=-U4otwzY8lUQ7kNvgG538Rl&_nc_gid=V9D5VzZ5RxLkcO0yZruuSQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYH4aYeRMx-gfjktpDW6ehUmJrLLpJ718Zc9rxZUtruRtg&oe=67E0DD72&_nc_sid=7a9f4b"

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: 'https://www.startravel.uz',
  ogImage: imgUrl,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: imgUrl,
  twitterCard: 'summary_large_image',
})

const router = useRouter()

defineShortcuts({
  'G-H': () => router.push('/'),
  'G-E': () => router.push('/email'),
})

const useIdFunction = () => useId()
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <div vaul-drawer-wrapper class="relative">
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>

    <Toaster />
    <Sonner class="pointer-events-auto" />
  </ConfigProvider>
</template>
