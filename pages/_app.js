import Layout from '../component/Layout'
import '../styles/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
