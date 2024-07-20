import ProductDetails from "@/components/Molecules/ProductDetails";
import { getItem } from "@/services/item-service";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const product = await getItem(id);

  const previousImages = (await parent).openGraph?.images || [];

  const productImages = product.photos.map(
    (photo) =>
      `https://catalogo-product-pic.s3.us-east-2.amazonaws.com/${photo.photo}`
  );

  return {
    title: product.name,
    description: product.description,
    category: product.category,
    creator: "Josue Silva de Azevedo de Carvalho",
    applicationName: "Catalogo JC",
    publisher: "Josue Carvalho",
    openGraph: {
      images: [...productImages, ...previousImages],
    },
  };
}

const ProdutoDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const product = await getItem(id);

  return (
    <section className="w-full flex justify-center mt-10">
      <ProductDetails item={product} />
    </section>
  );
};

export default ProdutoDetails;
