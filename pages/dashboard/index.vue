<script setup lang="ts">
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import * as z from 'zod'

nextTick(() => {
  apiGetALlProducts()
})

definePageMeta({
  layout: 'dashboard'
})

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  email: z.string().email('Bu email emas'),
  description: z.string().max(1000).optional(),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(async (values) => {
  console.log('Form submitted!', values)

  const { data } = await useFetch('/api/admin/products/create', {method: "POST", body: values})

  console.log('data: ', data)
})

interface TypeProducts {
  id: number,
  username: string,
  email: string,
  description?: string
}

const products = ref<TypeProducts[]>([])

async function apiGetALlProducts() {
  const { data } = await useFetch('/api/admin/products', {method: "GET", params: {id:1}})

  products.value = data._rawValue
}
</script>

<template>
  <div>
    <div v-for="product in products">
      {{ product }}
    </div>

    Bu Dashboard
    <form @submit.prevent="onSubmit" class="w-md mx-auto">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Username" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="Email" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="description">
        <FormItem>
          <FormLabel>Izoh</FormLabel>
          <FormControl>
            <Textarea placeholder="Izoh" v-bind="componentField"/>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button type="submit">
        Submit
      </Button>
    </form>
  </div>
</template>

<style scoped>

</style>
