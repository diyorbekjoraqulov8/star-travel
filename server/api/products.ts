import productRepo from "../repositories/product.repo"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const productId = query.productId

  if (productId) {
    return await productRepo.getById(productId)
  } else {
    return await productRepo.getAll(query)
  }
})
