import { useContext } from "react";
import { ICMContext } from "../contexts/ICMContext";

export const ICMResults = () => {
  const { resultado } = useContext(ICMContext);
  return (
    <div>
      <h2 className="text-xl">Resultado:</h2>
      <p>
        {resultado.value
          ? `Tu ICM es ${resultado.value} y tu estado es ${resultado.message}`
          : "Por favor, ingresa tu altura y peso"}
      </p>
    </div>
  );
};
