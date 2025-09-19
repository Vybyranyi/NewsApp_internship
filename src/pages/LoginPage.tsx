import LoginForm from "../components/LoginForm";

export default function LoginPage() {
	return (
		<div className="min-h-screen bg-gray-100 flex justify-center items-center">
			<div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4 text-center">
					Login to Your Account
				</h1>
				<LoginForm />
			</div>
		</div>
	);
}
