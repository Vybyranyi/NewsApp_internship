import RegistrationForm from "../components/RegistrationForm";

export default function RegisterPage() {
	return (
		<div className="min-h-screen bg-gray-100 flex justify-center items-center">
			<div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4 text-center">
					Create an Account
				</h1>
				<RegistrationForm />
			</div>
		</div>
	);
}
