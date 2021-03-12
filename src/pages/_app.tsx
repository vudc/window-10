import Layout from 'components/layout'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/main.scss'
// run saga middle ware

const MyApp = ({ Component, pageProps }: any) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
