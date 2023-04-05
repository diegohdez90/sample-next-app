import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { NotificationContextProvider } from '../store/notitication-context'

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>);
}

export default MyApp
