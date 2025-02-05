import React, {useContext} from "react";
import Produto from "./Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import {CarrinhoContext} from "@/Context/CarrinhoContext.jsx";
import {useCarrinhoContext} from "@/hooks/useCarrinhoContext.jsx";

const Produtos = () => {

    const {adicionarProduto} = useCarrinhoContext();

    return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            {...produto}
            adicionarProduto={adicionarProduto}
          />
        ))}
      </div>
    </section>
    );
};

export default Produtos;
