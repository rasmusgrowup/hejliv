import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <Navbar />
    </>
  )
}
