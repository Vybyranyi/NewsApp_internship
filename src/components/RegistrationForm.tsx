import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import {
	type RegisterSchemaType,
	registerSchema,
} from "../schema/registerSchema";

export default function RegistrationForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterSchemaType>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = (data: RegisterSchemaType) => {
		console.log(data);
	};

	return (
		<div className="flex justify-center items-center h-max">
			<Form
				onFinish={handleSubmit(onSubmit)}
				className="w-full max-w-md p-8"
				layout="vertical"
			>
				<Form.Item
					label="Enter your username"
					name="username"
					validateStatus={errors.username ? "error" : ""}
					help={errors.username?.message}
				>
					<Controller
						control={control}
						name="username"
						render={({ field }) => <Input {...field} placeholder="Username" />}
					/>
				</Form.Item>

				<Form.Item
					label="Enter your email"
					name="email"
					validateStatus={errors.email ? "error" : ""}
					help={errors.email?.message}
				>
					<Controller
						control={control}
						name="email"
						render={({ field }) => <Input {...field} placeholder="Email" />}
					/>
				</Form.Item>

				<Form.Item
					label="Enter your password"
					name="password"
					validateStatus={errors.password ? "error" : ""}
					help={errors.password?.message}
				>
					<Controller
						control={control}
						name="password"
						render={({ field }) => (
							<Input.Password {...field} placeholder="Password" />
						)}
					/>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="w-full mt-2">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}
