<script setup lang="ts">
import Skeleton from "@/components/ui/skeleton/Skeleton.vue";

useHead({
  script: [
    { src: "https://cdn.paycom.uz/integration/js/checkout.min.js", async: true }
  ]
});

onMounted(() => {
  setTimeout(() => apiProduct(), 0)
})

const route = useRoute()
const router = useRouter()

const product = ref({})

const activePayment = ref('PAYME')

async function apiProduct() {
  const productId = route.params.id
  const { data } = await useFetch(`https://fakestoreapi.com/products/${productId}`)

  console.log('data: ', data)

  product.value = data.value
}

</script>

<template>
  <div class="py-4">
    <Button variant="outline" size="sm" @click="() => router.back()" class="mb-2">
      <Icon name="i-lucide-arrow-left" size="18" />
      Orqaga
    </Button>
    <div class="grid grid-cols-2 gap-2 items-center">
      <div class="flex justify-center items-center h-[300px] px-4">
        <NuxtImg loading="lazy" v-if="false" :src="product.image" class="h-full"/>
        <Skeleton v-else class="h-full w-full rounded-xl" />
      </div>
      <div>
        <div v-if="product.id">
          <h1 class="text-2xl mb-4">{{ product.title }}</h1>
          <p class="text-sm mb-4">{{ product.description }}</p>
          <p class="text-lg mb-2">{{ product.price }}$</p>

          <p class="mb-2">To'lov qilish</p>

          <div class="flex gap-2 mb-4">
            <div
                @click="() => activePayment = 'PAYME'"
                :class="{ 'active_payment': activePayment === 'PAYME' }"
                class="cursor-pointer border-1 w-1/3 h-[100px] flex justify-center items-center rounded-sm"
            >
              <IconPayme />
            </div>
          </div>

          <LazyPaymentPayme />
        </div>

        <div v-else class="h-full">
          <Skeleton class="h-[30px] w-full rounded-xl mb-4" />
          <Skeleton class="h-[10px] w-full rounded-xl mb-2" />
          <Skeleton class="h-[10px] w-full rounded-xl mb-2" />
          <Skeleton class="h-[10px] w-full rounded-xl mb-2" />
          <Skeleton class="h-[10px] w-full rounded-xl mb-2" />
          <Skeleton class="h-[10px] w-3/4 rounded-xl mb-4" />
          <div class="flex gap-2 mb-4">
            <Skeleton class="h-[30px] w-1/3 rounded-xl" />
            <Skeleton class="h-[30px] w-1/4 rounded-xl" />
          </div>
          <div class="flex gap-2 mb-2">
            <Skeleton class="h-[100px] w-1/3 rounded-sm" />
            <Skeleton class="h-[100px] w-1/3 rounded-sm" />
          </div>
          <Skeleton class="h-[40px] w-full rounded-sm" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped class="css">
.active_payment {
  @apply border-black dark:border-white
}
</style>
