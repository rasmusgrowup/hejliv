import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main className='main'>{children}</main>
    </>
  )
}
