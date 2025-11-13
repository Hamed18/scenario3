import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name must be provided and must be a string",
      })
      .min(3, { message: "Name must be at least 3 characters long" })
      .max(50, { message: "Name cannot exceed 50 characters" }),

    email: z
      .string({
        required_error: "Email must be provided and must be a string",
      })
      .email({ message: "Invalid email format" }),

    password: z
      .string({
        required_error: "Password is required for your safety",
      })
      .min(6, { message: "Password must be at least 6 characters" })
      .max(20, { message: "Password cannot exceed 20 characters" }),

    whatsapp: z
      .string({
        required_error: "WhatsApp number is required",
      })
      .trim()
      .regex(/^(\+?\d{11,15})$/, {
        message: "Enter a valid WhatsApp number (e.g. +880123456789)",
      }),

    address: z
      .string({
        required_error: "Current address is required",
      })
      .trim()
      .min(3, { message: "Address must be at least 3 characters" }),

    institution: z
      .string({
        required_error: "Institution name is required",
      })
      .trim()
      .min(2, { message: "Institution name must be at least 2 characters" }),

    gameUID: z
      .string({
        required_error: "In-game UID is required",
      })
      .trim()
      .min(3, { message: "In-game UID must be at least 3 characters" })
      .max(11, { message: "In-game UID cannot exceed 11 characters" }),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
