import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://borrow-book-henna.vercel.app/"
})