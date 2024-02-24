import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string({
    }).email({
        message: "Enter an email"
    }),
    password: z.string().min(6, {
        message: "Enter a password"
    })
})

export const RegisterSchema = z.object({
    email: z.string({
    }).email({
        message: "Enter an email"
    }),
    password: z.string().min(6, {
        message: "Password should be at least 6 characters"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })
})