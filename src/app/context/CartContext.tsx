import { createContext, useState, type ReactNode } from "react";

export interface Product {
    id: number;
    title: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    category: string;
    description: string;
    shipping: 'free' | 'paid';
    condition: 'new' | 'used';
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getTotal: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existItem = prevCart.find((item) => item.id === product.id);

            if (existItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const getTotal = () =>
        cart.reduce((total, item) => total + item.quantity, 0);

    const getTotalPrice = () =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getTotal,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;