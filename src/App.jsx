import { ICMForm } from "./components/ICMForm";
import { useContext } from "react";
import { ICMContext } from "./contexts/ICMContext";
import { ICMResults } from "./components/ICMResults";

function App() {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <h1 className="text-3xl font-bold">
        Calculadora de Indice de Masa Corporal (ICM)
      </h1>

      <ICMForm />
      <ICMResults />
     
    </div>
  );
}

export default App;
