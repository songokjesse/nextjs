import prisma from '../../../lib/dbConnection'
// export const getStaticProps = async () => {
//     const chamas  = await prisma.chamas.findMany()
//     return { props: chamas}
// }

const Chama = (chamas) => {
    return (
    <div>
        <h1>Chama List </h1>
        {chamas.map((chama) => {
            <div >

            </div>
        })}
    </div>
    )
}

export default Chama
