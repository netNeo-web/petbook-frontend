# petbook-frontend

PetBook is a collaborative app that connects pet owners with service providers. Users can easily find and hire services such as veterinarians, pet sitters, trainers, and more. The platform features two main user types: service seekers and providers. Key features include distinct profiles, real-time chat, geolocation, and essential functionalities.

## Additional Documentation

- [Project Details](documents/project-details.md)

# Petbook - Frontend Technical Documentation

Remember to run `npm install` to install dependencies when you clone the project!

## Technologies used:

- **React.js** → with **Typescript**
- **React Router** → Routing
- **Axios** → HTTP
- **Barrel export** → Much more organized and cleaner imports
- **React Localization** → Multi-language (translations)

## Folders:

- **`assets/`** → For static resources (images, icons, etc.).

- **`components/`** → Reusable components with individual folders, adhering to the **SRP** (Single Responsibility Principle).

- **`hooks/`** → Custom hooks.

- **`interfaces/`** → Interface definitions.

- **`pages/`** → Each screen corresponds to a page, and each page has its own folder with:

  - The `.tsx` component.
  - Its own CSS.
  - Its `index.ts` for barrel export.

- **`routes/`** → Application routes.

- **`services/`**:

  - **`apiService.ts`** → Axios instance and CRUD functions.
  - **`services.ts`** → Stores specific calls to backend endpoints.
  - **`authService.ts`** → Handles authentication (empty for now).

- **`store/`** → For managing global state. Still to decide between **Redux** or **Zustand**.

- **`utils/`** → Utilities and helpers (empty for now).
