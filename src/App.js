import { Navbar } from './components/Navbar/Navbar';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import User from "./pages/user";
import Register from "./pages/register";
import Welcome from "./pages/welcome";
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {


  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Welcome />}/>
        <Route path='/register' element={<Register />}/>
        
        <Route path="*" element={<User />} />
        
      </Routes>
      

    </Navbar>
  )
}
const Home = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])


  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setUsers(res)
        } //typeof res == 'array'
      })
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setPosts(res)
        } //typeof res == 'array'
      })

  }

  useEffect(()=>{
    getData()
  }, [])

  const styles = {
    color: 'black',
    border: '1px solid #35E3C3',
    padding: 15, 
    margin: 'auto',
    marginBottom: 5,
    backgroundColor: '#35E3C3',
    fontFamily: 'Helvetica Neue'
  }

  return(
    <>
      <h2 style ={{marginLeft: 50}}>Лента пользователей</h2>
      <div style={{marginLeft: 50, display: 'grid'}}>
        {users.length > 0 &&
          users.map(user => {
            let x = 1;
            return <Card title={user.name} key={Math.random()} style={{width: 700, backgroundColor: '#ffffff',marginBottom: 10}} headStyle={{backgroundColor: '#7fffd4'}}>
            <p  style={{color: '#3db1d1'}} className='text_text'>Почта: {user.email}</p>
            <p style={{color: '#3db1d1'}} className='text_text'>Телефон: {user.phone}</p>
            <h2 style={{marginBottom:10, marginTop:0}}>Посты:</h2>
            {posts.map(post => {
              if(post.userId === user.id) 
              {return <Card title={post.title} type="inner" style={{marginBottom: 15}} headStyle={{backgroundColor: '#7fffd4'}}> <p >{post.body}</p> </Card>}
              else{
                return ''
              }})}
            </Card>
          })
        }
      </div>
    </>
  )
}



export default App;