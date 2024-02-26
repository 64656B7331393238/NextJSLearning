import { Metadata } from "next";
import { resolve } from "path";

type Props ={
  params:{
    productid :string
  }
}

export const generateMetadata = async ({params} : Props):Promise<Metadata>=>{
  const title = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`iPhone ${params.productid}`)
    },100)
  })
  
  return {
    title: `Product ${title}`
  }
}

export default function ProductDetails({
  params,
}: Props) {
  return <h1>Details of product {params.productid}</h1>;
}
