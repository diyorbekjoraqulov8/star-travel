<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="py-2">
    <CardContent>
      <div class="w-full flex items-center justify-center gap-4">
        <Carousel class="!max-w-none relative max-w-xs w-full">
          <CarouselContent>
            <CarouselItem>
              <div class="relative">
                <NuxtImg src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg" class="h-[500px] w-full"/>

                <div class="absolute flex flex-col justify-center h-full top-0 left-0 my-auto px-4 bg-black/20">
                  <h1 class="text-5xl font-medium mb-4 text-white dark:text-black">Lorem Ipsum is simply dummy text of the</h1>
                  <h1 class="text-lg text-white dark:text-black font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the</h1>

                  <Button @click="() => router.push('products')" class="w-max mt-6" size="lg">Sotib olish</Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="relative">
                <NuxtImg src="https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="h-[500px] w-full"/>

                <div class="absolute flex flex-col justify-center h-full top-0 left-0 my-auto px-4 bg-black/20">
                  <h1 class="text-5xl font-medium mb-4 text-white dark:text-black">Lorem Ipsum is simply dummy text of the</h1>
                  <h1 class="text-lg text-white dark:text-black font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the</h1>

                  <Button @click="() => router.push('products')" class="w-max mt-6" size="lg">Sotib olish</Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </CardContent>
  </div>
</template>

<style scoped>

</style>
