import type { Component, ComponentProps } from "solid-js";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface AlertCompoProps extends ComponentProps<any> {
	title: string;
	message: string;
}

const AlertCompo: Component<AlertCompoProps> = (props: AlertCompoProps) => {
	return (
		<Alert>
			<AlertTitle>{props.title}</AlertTitle>
			<AlertDescription>{props.message}</AlertDescription>
		</Alert>
	);
};

export default AlertCompo;
