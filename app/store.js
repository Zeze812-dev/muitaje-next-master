import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const add = (cart, item) => {

        const existingProduct = cart.find((item) => item.id === item.id);

        if (existingProduct) {
            return cart.map((item) =>
                item.id === item.id ? { ...item, count: item.count + 1 } : item
            );
        } else {
            return [...cart, { ...item, count: 1 }];
        }
};

function removeByIndex(arr, index) {
    if (index < 0 || index >= arr.length) {
        throw new RangeError("Index out of range");
    }
    return arr.slice(0, index).concat(arr.slice(index + 1));
}

export const useCart = create(
    persist(
        (set, get) => ({
            cart: [],
            // addToCart: (item) => set((state) => ({ cart: add(state.cart, item) })),
            addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),

            removeItem: (index) => set((state) => ({ cart: removeByIndex(state.cart, index) })),
            removeAllItems: () => set({ cart: [] }),
            setCart: (newCart) => set({ cart: newCart}),
        }),
        {
            name: 'shop-cart', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)
