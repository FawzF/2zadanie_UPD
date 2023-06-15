import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Register = () =>{
   
    const dispath = useDispatch()
    const store = useSelector(state => state)
    const [type, setType] = useState(1);
    const [regData, setRegData] = useState({
        name: "",
        password: "",
        password1: ""
      })
      const signUp = () => {
        if (regData.password !== regData.password1) {
          alert("Пароли не совпадают!")
          return
        }
        const checkUser = () => {
            return store.users.users.find(v => v.name === regData.name)
          }
        
        
        if (checkUser()) {
          alert("Пользователь с таким именем уже есть!")
          return
        }
        
        
        dispath(({ type: "addUser", name: regData.name, password: regData.password }))
        alert("Пользователь успешно создан!")
    
        setRegData({
          name: "",
          password: "",
          password1: ""
        })
    }

    return (
        <>
          <div className="main_layout">
            {type === 1 ?
              <div className="form_login" style ={{backgroundColor: '#7fffd4'}}>
                <h2 style={{color: '#000000'}}>Регистрация</h2>
                <input className="input_login" placeholder="Придумайте логин" value={regData.name} onChange={(e) => setRegData({ ...regData, name: e.target.value })} />
                <input className="input_login" type="password" placeholder="Придумайте пароль" value={regData.password} onChange={(e) => setRegData({ ...regData, password: e.target.value })} />
                <input className="input_login" type="password" placeholder="Повторите пароль" value={regData.password1} onChange={(e) => setRegData({ ...regData, password1: e.target.value })} />
                <button className="button_login" onClick={signUp} disabled={!regData.name || !regData.password || !regData.password1}>Зарегистрироваться</button>
                <span >Уже есть аккаунт?</span>
                <Link to="/login" >Войдите</Link>
              </div>:
               <h2>Регистрация</h2>
    
            }
          </div>
        </>
      );


}
export default Register;