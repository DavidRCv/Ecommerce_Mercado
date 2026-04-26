import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#ebebee]">
      <Header />

      <main>
        <Outlet />
      </main>

      <footer className="mt-16 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">Acerca de</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Mercado Libre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Investor relations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Tendencias
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold">Otros sitios</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Mercado Pago
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Mercado Envíos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold">Ayuda</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Comprar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Vender
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Resolución de problemas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold">Redes sociales</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-slate-600">
            <p>Copyright © 1999-2026 MercadoLibre</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
