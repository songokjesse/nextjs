import prisma from '../../lib/dbConnection'
export const getStaticProps = async () => {
    const response = await prisma.users.findMany()
    const users = response.json()
      return { props: { users } }
}

const UserList = ({users}) => {
    return (
        <div>
             {users.map((user) => (
            <div key={user.id} className="post">
                {user.email}
            </div>
          ))}
        </div>
    )
}

export default UserList