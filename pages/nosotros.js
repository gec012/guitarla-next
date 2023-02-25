import Layout from "@/components/layout";
import Link from "next/link";
export default function Nosotros(){
    return (
        <Layout
        title={"Nosotros"}
        description={"Sobre nosotros, guitarLA, tienda de musica"}
        >
          
            <Link href="/">Ir a Inicio</Link>
        </Layout>
    )
}