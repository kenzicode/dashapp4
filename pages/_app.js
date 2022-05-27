import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import App from 'next/app'
import { Component } from 'react/cjs/react.production.min'
import Admin from '../layouts/Admin'
import '../styles/globals.css'



export default class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }


  render() {
    const { Component, pageProps } = this.props
    const Layout = Component.layout || (({ children }) => <>{children}</>)

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

