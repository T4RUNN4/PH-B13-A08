import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://fantastic-meme-rj5w9pwj7462x6vx-3000.app.github.dev/"
})

export const { signIn, signUp, useSession } = createAuthClient()
