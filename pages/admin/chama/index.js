import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getStaticProps = async () => {
    const chamas  = await prisma.chamas.findMany()
    return { props: chamas}
}

const Chama = (chamas) => {
    return (
    <div>
        <h1>Chama List </h1>
        {chamas.map((chama) => {
            <div key={chama.id}>
                {chama.name}
            </div>
        })}
    </div>
    )
}

export default Chama
