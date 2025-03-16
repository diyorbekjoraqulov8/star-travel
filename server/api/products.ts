export default defineEventHandler(async (event) => {
  console.log('event: ', event)
  const response = await $fetch('https://jsonplaceholder.typicode.com/photos')

  console.log('response: ', response)

  return response
})
