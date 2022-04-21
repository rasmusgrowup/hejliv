import '../styles/globals.css'
import Layout from '../components/Layout'

function HejLiv({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default HejLiv
