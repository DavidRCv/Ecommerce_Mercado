import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { RootLayout } from "./pages/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "*",
        Component: () => (
          <div className="mx-auto max-w-7xl px-4 py-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="text-xl text-slate-600">Página no encontrada</p>
          </div>
        ),
      },
    ],
  },
]);
