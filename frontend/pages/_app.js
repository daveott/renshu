import 'antd/dist/antd.css'
import '../stylesheets/application.scss'
import DefaultLayout from '../layouts'
import App from 'next/app'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        )
    }
}

export default MyApp
