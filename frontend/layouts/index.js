import Meta from '../components/Meta'
import Footer from '../components/Footer'
import CartPopover from '../components/CartPopover'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Layout, Menu, Row, Col } from 'antd';

const { Header, Content } = Layout;

import { useRecoilValue } from 'recoil'
import { getCartState } from '../components/helpers/recoil-helper'

const DefaultLayout = (props) => {
  const items = useRecoilValue(getCartState)

  return (
    <div>
      <Meta />
      <Header className="header">
        <div className="logo" />
      </Header>
      <Menu mode="horizontal" className="navigation">
        <Menu.Item key="1">
          <Link href="/mattress"><a>Mattresses</a></Link>
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
          { props.isAuthenticated ?
            <Link href="/signout"><a>Sign Out</a></Link>
            :
            <Link href="/signin"><a>Sign In</a></Link>
          }
        </Menu.Item>
        <Menu.Item key="7">
          <CartPopover items={items} />
        </Menu.Item>
      </Menu>
      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </div>
  )
}

export default DefaultLayout
