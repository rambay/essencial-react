import { createContext, useState } from "react";

export const totalContext = createContext();

export default function ProductProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [title, setTitle] = useState("");
  const [srcImage, setSrcImage] = useState("");

  function totalPago(price, count, titulo, src) {
    let total = price * count;
    setTotal(total);
    setTitle(titulo);
    setSrcImage(src);
  }

  return (
    <totalContext.Provider value={{ title, srcImage, total, totalPago }}>
      {children}
    </totalContext.Provider>
  );
}
