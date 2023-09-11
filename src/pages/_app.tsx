import Layout from 'components/layout'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/main.scss'

// run saga middle ware

const MyApp = ({ Component, pageProps }: any) => {

    useEffect(() => {
       // document.getElementById('__next').requestFullscreen()
    },[])
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
