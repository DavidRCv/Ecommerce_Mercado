import { MapPin, Search, ShoppingCart, User } from "lucide";
import { Link } from "react-router";
import { LucideIcon } from "./LucideIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#fff159] shadow-sm">
      <div className="mx-auto max-w-[1560px] px-4 py-3 sm:px-6">
        <div className="grid items-center gap-4 md:grid-cols-[260px_1fr_72px] xl:grid-cols-[400px_minmax(520px,840px)_1fr]">
          <Link
            to="/"
            className="text-3xl font-bold leading-none text-slate-900 transition-opacity hover:opacity-80"
          >
            MercadoLibre
          </Link>

          <form className="min-w-0">
            <div className="flex h-[50px] overflow-hidden rounded-md border border-yellow-500/20 bg-white shadow-sm">
              <input
                type="search"
                placeholder="Buscar productos, marcas y más..."
                className="min-w-0 flex-1 px-5 text-lg text-slate-700 outline-none placeholder:text-slate-500/80"
              />
              <button
                type="submit"
                className="grid w-16 place-items-center border-l border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50"
                aria-label="Buscar"
              >
                <LucideIcon icon={Search} className="h-6 w-6" />
              </button>
            </div>
          </form>

          <div className="flex justify-start md:justify-end">
            <Link
              to="/carrito"
              className="grid h-12 w-14 place-items-center rounded-md bg-white text-slate-950 shadow-sm transition-colors hover:bg-slate-50"
              aria-label="Carrito"
            >
              <LucideIcon icon={ShoppingCart} className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <nav className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-2 text-lg text-black">
          <button className="flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-75">
            <LucideIcon icon={MapPin} className="h-5 w-5" />
            <span>Enviar a Capital Federal</span>
          </button>

          <Link to="/categorias" className="transition-opacity hover:opacity-75">
            Categorías
          </Link>
          <Link to="/ofertas" className="transition-opacity hover:opacity-75">
            Ofertas
          </Link>
          <Link to="/historial" className="transition-opacity hover:opacity-75">
            Historial
          </Link>
          <Link
            to="/cuentas"
            className="flex items-center gap-1.5 transition-opacity hover:opacity-75"
          >
            <LucideIcon icon={User} className="h-5 w-5" />
            <span>Mi cuenta</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
