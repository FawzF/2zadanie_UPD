import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate()
  const dispath = useDispatch()
  const store = useSelector(state => state)

  const [type, setType] = useState(1);

  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  })

  const [regData, setRegData] = useState({
    name: "",
    password: "",
    password1: ""
  })

  const checkUser = () => {
    return store.users.users.find(v => v.name === regData.name)
  }

  const findUser = () => {
    return store.users.users.find(v => v.name === loginData.name && v.password === loginData.password)

  }

  const signIn = () => {
    let user = findUser()
    if (user) {
      dispath(({ type: "add", id: user.id, name: user.name, password: user.password }));
      navigate("*")
    } else {
      alert("Неверный логин или пароль!")
    }
  }



  return (
    <>
      <div className="main_layout">
        {type === 1 ?
          <div className="form_login" style ={{backgroundColor: '#7fffd4'}}>
            <h2 style={{color: '#000000'}}>Вход</h2>
            <input className="input_login" placeholder="Ваш логин" value={loginData.name} onChange={(e) => setLoginData({ ...loginData, name: e.target.value })} />
            <input className="input_login" type="password" placeholder="Ваш пароль" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            <button className="button_login" onClick={signIn} disabled={!loginData.name || !loginData.password}>Войти</button>
            <span >Нет аккаунта?</span>
            <Link to="/register" >Создайте</Link>
          </div> :
          <div className="form_login">
            <h2>Регистрация</h2>
            
           
          </div>

        }
      </div>
    </>
  );
}

export default Welcome;