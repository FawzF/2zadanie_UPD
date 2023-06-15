import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Layout } from 'antd'


const {Content, Footer } = Layout;

export const Navbar = (props) => {
  const navigation = useNavigate()

  // const goToHome = () => {
  //   navigation('/', {
  //     state: {
  //       userId: 12,
  //       postId: 1,
  //     }
  //   })
  // }

  const navItems = [
    {
      label: <Link to="/" >Посты</Link>,
      key: 'home',

    },
    {
      label: <Link to="/login" >Вход</Link>,
      key: 'login',

    },
    {
      label: <Link to="/register" >Регистрация</Link>,
      key: 'register',

    },
  ]

  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <div>
        <nav>

          <Menu onClick={(e) => onClick(e)} selectedKeys={[current]} mode="horizontal" items={navItems} />
        </nav>
      </div>
      <div>
        <Content style={{ padding: '50px 50px' }}>
          <div className="site-layout-content" style={{ padding: 10, height: '100vh'}}>
            {props.children}
          </div>
        </Content>

      </div>
    </>
  )
}