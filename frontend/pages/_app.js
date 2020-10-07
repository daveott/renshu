import 'antd/dist/antd.css'
import '../stylesheets/application.scss'
import DefaultLayout from '../layouts'
import App from 'next/app'

import { RecoilRoot } from 'recoil'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <RecoilRoot>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </RecoilRoot>
        )
    }
}

export default MyApp
