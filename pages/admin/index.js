import Link  from 'next/link'
const AdminHome = () => {
    return (
        <div>
            <h1>Admin Home</h1>
            <hr/>
                    <Link href="/admin/users"><a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Users</a></Link>
                    <Link href="/admin/users"><a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Accounts</a></Link> 
        </div>
    )
}

export default AdminHome