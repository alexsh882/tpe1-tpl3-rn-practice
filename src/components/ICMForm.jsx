import { useContext } from "react";
import { ICMContext } from "../contexts/ICMContext";
import { useForm } from "../hooks/useForm";

export const ICMForm = () => {
  const { setData } = useContext(ICMContext);

  const {
    form: data,
    handleInputChange,
    reset,
  } = useForm({
    altura: 0,
    peso: 0,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const dataToSend = {
      altura: parseInt(data.altura),
      peso: parseInt(data.peso),
    };
    setData(dataToSend);
  };

  return (
    <>
      <form
        id="icm-form"
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-4 my-4"
      >
        <fieldset class="border border-solid border-gray-300 p-3">
          <legend className="text-sm">Completa el formulario</legend>
          <label htmlFor="altura">Altura en centímetros</label>
          <input
            min={0}
            name="altura"
            value={data.altura}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5  px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="number"
            id="altura"
          />

          <label htmlFor="peso">Peso en kilos</label>
          <input
            min={0}
            name="peso"
            value={data.peso}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5  px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="number"
            id="peso"
          />
          <div className="my-2 w-full flex justify-end gap-2">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-gray-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-600 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
            >
              Calcular
            </button>
            {/* reset form */}
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center px-4 py-2 bg-gray-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-600 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
            >
              Limpiar
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
