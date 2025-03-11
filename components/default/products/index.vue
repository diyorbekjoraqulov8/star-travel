<script setup lang="ts">
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
  <section>
    <NuxtLink to="products" class="flex items-center gap-1 w-max mb-2">
      <h3 class="text-2xl font-medium">Mahsulatlar</h3>
    </NuxtLink>
    <div class="mb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      <div
          v-for="product in products"
          :key="`product_${product.id}`"
          class="p-2 h-[410px] flex flex-col gap-2 rounded"
      >
        <NuxtLink :to="`products/${product.id}`">
          <NuxtImg :alt="product.title" format="webp" class="hover:scale-103 transition-200 mx-auto h-[200px] max-w-[200px]" loading="lazy" :src="product.image"/>
        </NuxtLink>

        <div>
          <NuxtLink
              :to="`products/${product.id}`"
              class="text-base leading-5 line-clamp-2"
          >
            {{ product.title }}
          </NuxtLink>

          <p class="text-red font-medium">{{ product.price }}</p>
          <p class="leading-4 text-sm text-neutral-700 dark:text-neutral-3 line-clamp-3">{{ product.description }}</p>

          <span v-for="num in Math.round(product.rating?.rate)">*</span>
        </div>

        <Button class="w-full mt-auto">Sotib olish</Button>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
