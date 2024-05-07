import React, {createContext, useEffect, useMemo, useReducer, useState} from "react";
import {carrinhoReducer} from "@/reducers/carrinhoReducer.js";

export const CarrinhoContext = createContext();

CarrinhoContext.displayName="Carrinho";

const estadoInicial = [];

export const CarrinhoProvider = ({children}) =>{

    const [carrinho, dispatch] = useReducer(carrinhoReducer,estadoInicial);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);

    const { novoTotal, novaQuantidade } = useMemo(() => {
        return carrinho.reduce(
            (contador, produto) => ({
                novaQuantidade: contador.novaQuantidade + produto.quantidade,
                novoTotal: contador.novoTotal + produto.preco * produto.quantidade,
            }),
            {
                novaQuantidade: 0,
                novoTotal: 0,
            }
        );
    }, [carrinho]);

    useEffect(() => {
        setQuantidadeProdutos(novaQuantidade);
        setValorTotalCarrinho(novoTotal);
    });

    return(
        <CarrinhoContext.Provider value={{
            carrinho,dispatch,
            quantidadeProdutos,
            valorTotalCarrinho
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}