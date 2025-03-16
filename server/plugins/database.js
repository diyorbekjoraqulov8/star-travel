import mongoose from 'mongoose'

export default defineNitroPlugin(async () => {
    await mongoose.connect(useRuntimeConfig().MONGO_URI)
    console.log("Mongo DB connected successfully.")
})
