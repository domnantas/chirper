import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default ({ auth }) => {
	const { data, setData, post, processing, reset, errors } = useForm({
		message: "",
	});

	const submit = (event) => {
		event.preventDefault();
		post(route("chirps.store"), {
			onSuccess: () => reset(),
		});
	};

	return (
		<Authenticated user={auth.user}>
			<Head title="Chirps" />

			<div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
				<form onSubmit={submit}>
					<textarea
						value={data.message}
						placeholder="What's on your mind?"
						className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
						onChange={(event) =>
							setData("message", event.target.value)
						}
					></textarea>
					<InputError message={errors.message} className="mt-2" />
					<PrimaryButton className="mt-4" disabled={processing}>
						Chirp
					</PrimaryButton>
				</form>
			</div>
		</Authenticated>
	);
};
