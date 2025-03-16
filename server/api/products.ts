import productRepo from "../repositories/product.repo"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  return await productRepo.getAll(query)
})
