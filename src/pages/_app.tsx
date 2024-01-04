import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const {asPath} = useRouter()
  return <>
    <Head>
      <title>Packhoop</title>
    </Head>
    {!asPath.includes('studio') && <Header />}
    <Component {...pageProps} />
    {!asPath.includes('studio') && <Footer />}
  </>
}
