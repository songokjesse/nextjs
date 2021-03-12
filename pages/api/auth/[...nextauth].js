import NextAuth from 'next-auth'
import Providers  from 'next-auth/providers'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default (req,res) => NextAuth(req,res, {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENTID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    secret: process.env.SECRET,
})