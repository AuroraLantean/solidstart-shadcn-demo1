import type { Component, ComponentProps } from "solid-js";
import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { web3StateDefault, type Web3StatesT } from "~/lib/web3init";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface CartContextProviderProps extends ComponentProps<any> {
	// add props here
}
export const CartContext = createContext();

export const CartContextProvider: Component<CartContextProviderProps> = (
	props: CartContextProviderProps,
) => {
	const [state, setState] = createStore<Web3StatesT>(web3StateDefault);

	return (
		<CartContext.Provider value={{ state, setState }}>
			{props.children}
		</CartContext.Provider>
	);
};
export const useCartContext = () => useContext(CartContext);
