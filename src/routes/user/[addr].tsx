import { useParams } from "@solidjs/router";
import type { Component, ComponentProps } from "solid-js";
import MobileMenu from "~/components/MobileMenu";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface UserProps extends ComponentProps<any> {
	// add props here
}

const User: Component<UserProps> = (props: UserProps) => {
	const params = useParams();
	return (
		<div>
			<MobileMenu />
			<h2>User: {params.addr}</h2>
		</div>
	);
};

export default User;
