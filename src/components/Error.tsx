import { Error } from "../types";

export default function Error({ error }: { error: Error }) {
	return (
		<div className="w-4/5 mx-auto mt-24 text-center">
			<p className="text-5xl text-white font-lora font-semibold">
				{error.cod} - {error.message}
			</p>
		</div>
	);
}
