# Petbook - Frontend

¡Recuerda ejecutar `npm install` para instalar las dependencias cuando clones el proyecto!

## Tecnologías utilizadas:

- **React.js** → con **Typescript**
- **React Router** → Rutas
- **Axios** → HTTP
- **Barrel export** → Importaciones mucho más organizadas y limpias
- **React Localization** → Multi-idioma (traducciones)

## Carpetas:

- **`assets/`** → Para recursos estáticos (imágenes, iconos, etc.).

- **`components/`** → Componentes reutilizables con carpetas individuales, manteniendo el **SRP** (Principio de Responsabilidad Única).

- **`hooks/`** → Custom hooks.

- **`interfaces/`** → Definiciones de interfaces.

- **`pages/`** → Cada pantalla corresponde a una página, y cada página tiene su propia carpeta con:
  - El componente `.tsx`.
  - Su CSS propio.
  - Su `index.ts` para la exportación de barril.

- **`routes/`** → Rutas de la aplicación.

- **`services/`**:
  - **`apiService.ts`** → Instancia de Axios y las funciones CRUD.
  - **`services.ts`** → Almacena las llamadas específicas a los endpoints del backend.
  - **`authService.ts`** → Maneja la autenticación (vacío por ahora).

- **`store/`** → Para manejar el estado global. Aún por decidir entre **Redux** o **Zustand**.

- **`utils/`** → Utilidades y helpers (vacío por ahora).
