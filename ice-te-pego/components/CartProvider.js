"use client";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "ice-te-pego:carrinho";

// Cada item: { id: "1-Grande", sabor: "Morango", tamanho: "Grande", preco: 15.5, qtd: 2 }
function reducer(state, action) {
  switch (action.type) {
    case "load":
      return action.items;
    case "add": {
      const existe = state.find((i) => i.id === action.item.id);
      if (existe) {
        return state.map((i) => (i.id === action.item.id ? { ...i, qtd: i.qtd + 1 } : i));
      }
      return [...state, { ...action.item, qtd: 1 }];
    }
    case "setQtd": {
      if (action.qtd <= 0) return state.filter((i) => i.id !== action.id);
      return state.map((i) => (i.id === action.id ? { ...i, qtd: action.qtd } : i));
    }
    case "remove":
      return state.filter((i) => i.id !== action.id);
    case "clear":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [pronto, setPronto] = useState(false);

  // Recupera o carrinho salvo no navegador
  useEffect(() => {
    try {
      const salvo = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(salvo)) dispatch({ type: "load", items: salvo });
    } catch {
      /* ignora dados corrompidos */
    }
    setPronto(true);
  }, []);

  useEffect(() => {
    if (!pronto) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* armazenamento indisponível */
    }
  }, [items, pronto]);

  // Cálculo em tempo real: recalcula a cada mudança do carrinho
  const total = items.reduce((soma, i) => soma + i.preco * i.qtd, 0);
  const quantidade = items.reduce((soma, i) => soma + i.qtd, 0);

  const value = {
    items,
    total,
    quantidade,
    add: (item) => dispatch({ type: "add", item }),
    setQtd: (id, qtd) => dispatch({ type: "setQtd", id, qtd }),
    remove: (id) => dispatch({ type: "remove", id }),
    clear: () => dispatch({ type: "clear" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart precisa estar dentro de <CartProvider>");
  return ctx;
}
