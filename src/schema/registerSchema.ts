import { z } from "zod";

export const registerSchema = z.object({
	username: z
		.string()
		.min(3, "Username must be at least 3 characters long")
		.max(20, "Username must be at most 20 characters long"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
