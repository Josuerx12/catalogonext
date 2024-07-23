import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="text-center text-xl md:text-3xl font-bold mt-4">
        Sejá bem vindo ao catalogo JC, encontre seus materiais na página de
        catalogo de materiais.
      </h2>

      <p className="text-center text-lg md:text-xl mt-4">
        Acesse a página de catalogo{" "}
        <Link className="text-blue-600" href={"/catalogo"}>
          clicando aqui
        </Link>
        . E utilize a pesquisa para encontrar os materiais mais relevantes para
        seu negócio.
      </p>
    </main>
  );
}
