import { useState } from "react";
import { z } from "zod";
let count = 0;

const schema = z.object({
    user: z.string().min(4, "name must be atleast 4 characters"),
    email: z.string().min(1, "email is required").email('email form is invalid'),
    password: z.string().min(8, "password must be atleast 8 (characters,numbers,symbols)"),
});

export const useMain = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const validation = () => {
        const result = schema.safeParse({
            user: name,
            email: email,
            password: password,
        })
        if (!result.success) {
            console.log(result.error.flatten().fieldErrors);
            return setError(result.error.flatten().fieldErrors);
        }
        console.log(true);
        
        setError(null);
    }
    return {
        password, setPassword, email, setEmail, name, setName, error, setError, validation
    }
}