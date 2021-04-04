import {useSession} from 'next-auth/client'
import UserList from "../../../components/users/UserList"

const UserHome = () => {
    const [ session, loading ] = useSession()
    if (loading) return null
    if (!loading && !session) return <p>Access Denied</p>
    return (<div>
        <h1>UserHome</h1>
        <hr/>
        <UserList />

    </div>)
}

export default UserHome