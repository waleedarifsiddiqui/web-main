import Layout from "@/components/common/Layout"
import "@/styles/main.scss"
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  )
}
