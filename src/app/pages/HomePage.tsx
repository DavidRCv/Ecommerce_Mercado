import { Funnel, Star, Truck } from "lucide";
import { useMemo, useState } from "react";
import { LucideIcon } from "../components/LucideIcon";
import type { Product } from "../context/CartContext";
import { categories, products } from "../data/product";

const sortOptions = [
  { value: "relevant", label: "Más relevantes" },
  { value: "lowest", label: "Menor precio" },
  { value: "highest", label: "Mayor precio" },
  { value: "rating", label: "Mejor calificados" },
];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-square overflow-hidden rounded-lg bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex flex-wrap items-baseline gap-2 text-sm">
          {product.originalPrice ? (
            <span className="text-slate-500 line-through">${product.originalPrice}</span>
          ) : null}
          {discount ? <span className="font-semibold text-emerald-600">{discount}% OFF</span> : null}
        </div>

        <div className="text-3xl font-semibold tracking-normal text-black">${product.price}</div>

        <div className="flex items-center gap-1.5 text-base text-emerald-600">
          <LucideIcon icon={Truck} className="h-5 w-5" />
          <span>{product.shipping === "free" ? "Envío gratis" : "Envío disponible"}</span>
        </div>

        <h3 className="min-h-12 text-lg font-semibold leading-snug text-slate-950">
          {product.title}
        </h3>

        <div className="flex items-center gap-1 text-base text-slate-700">
          <LucideIcon icon={Star} className="h-5 w-5 fill-[#ffc400] text-[#ffc400]" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-slate-500">({product.reviews})</span>
        </div>
      </div>
    </article>
  );
}

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevant");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("3000");

  const visibleProducts = useMemo(() => {
    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Number.POSITIVE_INFINITY;

    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        normalize(product.category) === normalize(selectedCategory);

      return matchesCategory && product.price >= min && product.price <= max;
    });

    return filtered.toSorted((first, second) => {
      if (sortBy === "lowest") {
        return first.price - second.price;
      }

      if (sortBy === "highest") {
        return second.price - first.price;
      }

      if (sortBy === "rating") {
        return second.rating - first.rating;
      }

      return first.id - second.id;
    });
  }, [maxPrice, minPrice, selectedCategory, sortBy]);

  return (
    <div className="bg-[#ebebee]">
      <div className="mx-auto max-w-[1560px] px-4 py-9 sm:px-6">
        <p className="mb-8 text-xl text-slate-700">{visibleProducts.length} resultados</p>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-xl bg-white p-5 shadow-sm">
            <div className="mb-7 flex items-center gap-3">
              <LucideIcon icon={Funnel} className="h-7 w-7 text-black" />
              <h2 className="text-3xl font-bold text-black">Filtro</h2>
            </div>

            <section>
              <h3 className="mb-4 text-2xl font-semibold text-black">Categorías</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const isActive = selectedCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-xl font-semibold transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-black hover:bg-slate-100"
                      }`}
                    >
                      {category.icon ? <span className="w-5 text-base">{category.icon}</span> : null}
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="mt-9">
              <h3 className="mb-4 text-2xl font-semibold text-black">Precio</h3>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <input
                  type="number"
                  min="0"
                  value={minPrice}
                  onChange={(event) => setMinPrice(event.target.value)}
                  className="h-11 min-w-0 rounded-md border border-slate-200 px-3 text-xl outline-none focus:border-blue-500"
                  aria-label="Precio mínimo"
                />
                <span className="text-xl text-slate-700">-</span>
                <input
                  type="number"
                  min="0"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(event.target.value)}
                  className="h-11 min-w-0 rounded-md border border-slate-200 px-3 text-xl outline-none focus:border-blue-500"
                  aria-label="Precio máximo"
                />
              </div>
            </section>
          </aside>

          <section className="min-w-0">
            <div className="mb-8 flex items-center gap-5 rounded-xl bg-white px-5 py-5 shadow-sm">
              <label htmlFor="sort" className="text-xl font-semibold text-slate-700">
                Ordenar por:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-11 w-52 rounded-md border border-slate-200 bg-white px-4 text-xl text-black outline-none focus:border-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
