import Head from 'next/head'
import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (
        <>
            <Head>
              <title>My Chama</title>
              <link rel="icon" href="/favicon.ico" />
             </Head>
            <Navbar />
            <div className="container md:mx-auto">
                {children}
            </div>
        </>
       )
}

export default Layout
