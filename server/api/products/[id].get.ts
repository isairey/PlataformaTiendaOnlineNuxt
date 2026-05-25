export default defineEventHandler(async(event) =>{
    const id = Number(event.context.params!.id)
    const categories = await $fetch("/api/categories")
    const category = categories.find(c=> c.id === id)
    return{
        id,
        name: `Producto ${id}`,
        price: '99',
        category,
    }
})