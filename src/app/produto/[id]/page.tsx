import React from "react";

const ProdutoDetails = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default ProdutoDetails;
