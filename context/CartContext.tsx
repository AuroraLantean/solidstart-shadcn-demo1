import type { Component, ComponentProps } from "solid-js";
import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { web3StateDefault, type Web3StatesT } from "~/lib/web3init";

export type cartContextType = {
	state: Web3StatesT;
	setState: (state: Web3StatesT) => void;
};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface CartContextProviderProps extends ComponentProps<any> {
	// add props here
}
export const CartContext = createContext<cartContextType>(); //not to export globally to prevent unexpected access;

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
export const useCartContext = () => {
	const context = useContext(CartContext);
	if (!context) throw new Error("CartContext is not valid");
	return context;
};
