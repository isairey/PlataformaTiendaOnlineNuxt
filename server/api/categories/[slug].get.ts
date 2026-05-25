export default defineEventHandler((event)=>{
    const slug = String(event.context.params!.slug)
    return{
        name: slug, 
        description: `Descripcion de la categoria: ${slug}`
    }
        
    
})