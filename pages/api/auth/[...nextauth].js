import NextAuth from 'next-auth'
import Providers  from 'next-auth/providers'


export default (req,res) => NextAuth(req,res, {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENTID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    secret: process.env.SECRET,
})