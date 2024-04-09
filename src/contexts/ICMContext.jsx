import { createContext, useState, useEffect } from "react";

export const ICMContext = createContext({});

export const ICMContextProvider = ({ children }) => {
  const [data, setData] = useState({
    altura: 0,
    peso: 0,
  });
  const [resultado, setResultado] = useState({
    value: 0,
    message: "Por favor, ingresa tu altura y peso",
  });

  useEffect(() => {
    if (data.altura === 0 || data.peso === 0) {
      return setResultado({
        resultado: 0,
        message: "Por favor, ingresa tu altura y peso",
      });
    }

    const icm = (data.peso / (data.altura / 100) ** 2).toFixed(2);
    switch (true) {
      case icm < 18.5:
        setResultado(
          setResultado({
            value: icm,
            message: "Bajo peso",
          })
        );
        break;
      case icm < 24.9:
        setResultado({
          value: icm,
          message: "Normal",
        });
        break;
      case icm < 29.9:
        setResultado({
          value: icm,
          message: "Sobrepeso",
        });
        break;
      case icm < 34.9:
        setResultado({
          value: icm,
          message: "Obesidad I",
        });
        break;
      case icm < 39.9:
        setResultado({
          value: icm,
          message: "Obesidad II",
        });
        break;
      case icm >= 40:
        setResultado({
          value: icm,
          message: "Obesidad III",
        });
        break;
      default:
        setResultado({
          resultado: 0,
          message: "Por favor, ingresa tu altura y peso",
        });
    }
  }, [data]);

  return (
    <ICMContext.Provider value={{ setData, resultado }}>
      {children}
    </ICMContext.Provider>
  );
};
