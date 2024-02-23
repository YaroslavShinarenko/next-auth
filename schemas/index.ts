import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string({
        invalid_type_error: "Invalid email",
        required_error: "Email is required",
    }).email(),
    password: z.string()
})