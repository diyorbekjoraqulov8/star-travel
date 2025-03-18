<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="h-160 grid grid-cols-2 gap-x-10">
    <div class="flex flex-col items-start justify-center gap-8">
      <Button class="gap-2 text-pink shadow-lg dark:text-white" size="lg" variant="secondary">
        Explore the world!
        <Icon name="i-lucide-compass" class="animate-spin-slow" size="18" />
      </Button>

      <h1 class="font-bold text-7xl">
        Butun dunyo bo'ylab
        <p class="text-pink">Sayohat qil</p>
      </h1>

      <p class="text-gray text-lg">Sayohat boʻyicha maslahatlar, tavsiyalar va eng soʻnggi promolardan xabardor boʻling</p>

      <div class="flex gap-4">
        <Button class="gap-2 text-white" size="lg" @click="() => router.push('products')">
          Boshlash
          <Icon name="i-lucide-arrow-right" size="18" />
        </Button>
        <Button variant="outline-primary" class="gap-2" size="lg">
          Tanishtiruv
          <div class="bg-primary text-white rounded-full w-[20px] h-[20px] flex justify-center items-center">
            <Icon name="i-lucide-play" size="12" />
          </div>
        </Button>
      </div>
    </div>
    <div class="income_page-slides relative flex flex-wrap gap-4 justify-center items-center">
      <NuxtImg loading="lazy" src="incom/incom-first-image.svg"/>
      <NuxtImg loading="lazy" src="incom/incom-second-image.svg"/>
      <NuxtImg loading="lazy" src="incom/incom-four-image.svg"/>
      <NuxtImg loading="lazy" src="incom/incom-three-image.svg"/>
    </div>
  </div>
</template>

<style scoped lang="css">
.income_page-slides {
}

.income_page-slides:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -8;
  background: url("public/incom/income-page-img.svg") no-repeat center;
  background-size: contain;
  transform: scale(1.3) translate(5%, 3%);
}

.income_page-slides > img {
  border-radius: 30px;
  width: 200px;
  height: max-content;

  &:first-child {
    transform: translateY(30%);
  }
  &:last-child {
    transform: translateY(-30%);
  }
}
</style>
