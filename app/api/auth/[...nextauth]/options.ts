import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? '',
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username:',
                    type: 'text',
                    placeholder: 'your-cool-username',
                },
                password: {
                    label: 'Password:',
                    type: 'password',
                    placeholder: 'your-awesome-password',
                },
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const users = [
                    { id: '41', name: 'Conten.t', password: 'hireThisGuyYay' },
                    { id: '42', name: 'Dave', password: 'pleaseHireMe' },
                    { id: '43', name: 'Kingsley', password: 'itsKingsley' },
                ]

                const matchedUser = users.find(
                    (user) =>
                        credentials?.username === user.name &&
                        credentials?.password === user.password
                )

                if (matchedUser) return matchedUser
                else return null
            },
        }),
    ],
    secret: process.env.SECRET ?? ' ',
}
