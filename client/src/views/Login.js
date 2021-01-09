import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ setUserId }) {
   const initialState = {
      email: "",
      password: "",
   };
   const [form, setForm] = useState(initialState);

   const handleInput = (e) => {
      setForm({ ...form, [e.target.id]: e.target.value });
   };
   const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
         console.log("enter hit");
         handleLogin();
         setForm(initialState);
      }
   };
   const loginRoute = "http://localhost:8080/users/login";
   const handleLogin = () => {
      console.log(form);
      axios.post(loginRoute, form).then((res) => {
         console.log(res);
         setUserId(res.data._id);
      });
   };

   return (
      <div className="login-view">
         <div className="login-card">
            <h2 className="login-card__title">Login</h2>
            <div className="login-card__form-row">
               <span className="login-card__form-title">email</span>
               <input
                  className="login-card__form-input"
                  type="text"
                  id="email"
                  value={form.email}
                  onKeyDown={handleKeyDown}
                  onChange={handleInput}
               ></input>
            </div>
            <div className="login-card__form-row">
               <span className="login-card__form-title">pw</span>
               <input
                  className="login-card__form-input"
                  type="password"
                  id="password"
                  value={form.password}
                  onKeyDown={handleKeyDown}
                  onChange={handleInput}
               ></input>
            </div>
            <Link className="login-card__reglink" to="">
               Register Here
            </Link>
         </div>
      </div>
   );
}

export default Login;
