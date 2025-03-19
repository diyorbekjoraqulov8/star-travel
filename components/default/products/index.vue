<script setup lang="ts">
const router = useRouter()

const {data: products} = await useFetch('/api/products')

</script>

<template>
  <section>
    <NuxtLink to="products" class="mb-2 w-max flex items-center gap-1">
      <h3 class="text-2xl font-medium">
        {{ $t('tourPackages') }}
      </h3>
    </NuxtLink>
    <div class="grid mb-20 gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">
      <div
        v-for="product in products"
        :key="`product_${product._id}`"
        class="h-[410px] flex flex-col gap-2 rounded p-2"
      >
        <NuxtLink :to="`products/${product._id}`">
          <NuxtImg :alt="product.title" format="webp" class="mx-auto h-[200px] max-w-[200px] transition-200 hover:scale-103" loading="lazy" :src="product.imageUrl" />
        </NuxtLink>

        <div>
          <NuxtLink
            :to="`products/${product._id}`"
            class="line-clamp-2 text-base leading-5"
          >
            {{ product.name }}
          </NuxtLink>

          <p class="text-red font-medium">
            {{ product.price }}
          </p>
          <p class="line-clamp-3 text-sm text-neutral-700 leading-4 dark:text-neutral-3">
            {{ product.description }}
          </p>

<!--          <span v-for="num in Math.round(product.rating?.rate)">*</span>-->
        </div>

        <Button class="mt-auto w-full" @click="() => router.push(`products/${product._id}`)">
          Sotib olish
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
