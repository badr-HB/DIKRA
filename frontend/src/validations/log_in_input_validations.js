import { useState } from "react";
import { z } from "zod";
let count = 0;

const schema = z.object({
    email: z.string().min(1, "email is required").email('email form is invalid'),
    password: z.string().min(8, "password must be atleast 8 (characters,numbers,symbols)"),
});

export const useMain = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validation = () => {
        const result = schema.safeParse({
            email: email,
            password: password,
        })
        if (!result.success) {
            return setError(result.error.flatten().fieldErrors);
        }
        setError(null);
        
    }
    return {
        password, setPassword, email, setEmail, error, validation
    }
}