import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
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
         handleLogin();
         setForm(initialState);
      }
   };

   const handleLogin = () => {
      const loginRoute = "http://localhost:8080/users/login";
      axios.post(loginRoute, form, { withCredentials: true }).then((res) => {
         
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
