# Mini Proyecto React JS

## Calculadora de IMC

#### ¿Que es ICM?

Es una herramienta útil para determinar si una persona tiene un peso saludable en relación con su altura. Calcular el IMC proporciona una indicación general del nivel de grasa corporal y ayuda a clasificar a las personas en categorías como bajo peso, peso normal, sobrepeso u obesidad.

Los datos de IMC se obtuvieron desde [Tabla de la Organización Mundial de la Salud (OMS)](https://www.enterat.com/salud/imc-indice-masa-corporal.php).

#### Stack Utilizado
- React JS
- Tailwind Css

### Se implementaron los Hooks:

- **useState**: para el manejo del estado de los datos ingresados, así como también el resultado del calculo.
- **useEffect**: para cargar los datos por defecto y realizar el nuevamente calculo cuando cambian.
- **useContext**: para conectar todos los componentes y sus datos.

### Se implementó un custom Hook
-  **useForm**: utilizado para controlar el estado del formulario.


### ¿ Como pruebo el proyecto ?

1. Clonar el proyecto desde GitHub utilizando el siguiente comando en tu terminal:

   ```bash
   git clone https://github.com/alexsh882/tpe1-tpl3-rn-practice.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd tpe1-tpl3-rn-practice
   ```

3. Instala las dependencias del proyecto:

   ```bash
    pnpm i
   ```

4. Ejecuta la app en modo de desarrollo

   ```bash
   pnpm run dev
   ```

   Ahora puedes probar la calculadora de IMC.
