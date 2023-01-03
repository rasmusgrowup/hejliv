import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Meta from "./Meta";

export default function Layout({ children }) {
  return (
    <>
        <Meta />
        <Header />
        <Navbar />
        <main className='main'>{children}</main>
    </>
  )
}
