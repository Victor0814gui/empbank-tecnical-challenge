import { z } from "zod";





export const createCustomerValidator = z.object({
    body: z.object({
        name: z.string({
            required_error: "Full name is required",
        }),
        code: z
            .string({
                required_error: "Email is required",
            })
            .email("Not a valid email"),
    }),
});