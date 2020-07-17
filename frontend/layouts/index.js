import Meta from '../components/Meta'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useEffect } from 'react'

import { Layout, Menu, Row, Col } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const DefaultLayout = (props) => {
  return (
    <div>
      <Meta />
      <Header className="header">
        <div className="logo" />
      </Header>
      <Menu mode="horizontal" className="navigation">
        <Menu.Item key="1">
          <Link href="/"><a>Mattresses</a></Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/"><a>Bedding</a></Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/"><a>Furniture</a></Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/"><a>Compare</a></Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/"><a>About</a></Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/">
            <a>
              { props.isAuthenticated ?
                <Link href="/signout"><a>Sign Out</a></Link>
                :
                <Link href="/signin"><a>Sign In</a></Link>
              }
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link href="/">
            <a><ShoppingCartOutlined /></a>
          </Link>
        </Menu.Item>
      </Menu>
      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </div>
  )
}

export default DefaultLayout
