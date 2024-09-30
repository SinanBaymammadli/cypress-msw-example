import { z } from "zod";

const envSchema = z.object({
	VITE_MSW_MOCKING_ENABLED: z.enum(["true", "false"]).transform((value) => value === "true"),
});

export const ENV = envSchema.parse(import.meta.env);
