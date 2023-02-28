import Layout from "@/components/layout";   
import ListadoGuitarras from "@/components/listado-guitarras";  



export default function Tienda(){
    return(
        <Layout
           title ={'Tienda Virtual'} 
           description ={'Tienda Virtual, venta de quitarras, instrumentos, GuitarraLA'}
            >
            <main className="contenedor">
                <h1 className="heading">
                    Nuestra Coleccion
                </h1>
                <ListadoGuitarras
                
                
                />



            </main>
        </Layout>
    )
}