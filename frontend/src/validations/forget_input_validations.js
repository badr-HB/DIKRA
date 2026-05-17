import { useState } from "react";
import { z } from "zod";
let count = 0;

const schema = z.object({
    email: z.string().min(1, "email is required").email('email form is invalid'),
});

export const useMain = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validation = () => {
        const result = schema.safeParse({
            email: email,
        })
        if (!result.success) {
            return setError(result.error.flatten().fieldErrors);
        }
        setError(null);

    }
    return {
        email, setEmail, error, validation
    }
}