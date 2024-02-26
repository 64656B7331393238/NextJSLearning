export default function ProductDetails({
  params,
}: {
  params: { productid: string };
}) {
  return <h1>Details of product {params.productid}</h1>;
}
