import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ setUserId }) {
   const initialState = {
      email: "donkey@wiener.com",
      password: "jalapeno",
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

   const history = useHistory();
   const handleLogin = () => {
      const loginRoute = "http://localhost:8080/users/login";
      axios.post(loginRoute, form, { withCredentials: true }).then((res) => {
         setUserId(res.data._id);
         history.push("/classes");
      });
   };

   return (
      <div className="view">
         <div className="login">
            <h2 className="login__title">Login</h2>
            <div className="login__form-row">
               <span className="login__form-title">email</span>
               <input
                  className="login__form-input"
                  type="text"
                  id="email"
                  value={form.email}
                  onKeyDown={handleKeyDown}
                  onChange={handleInput}
               ></input>
            </div>
            <div className="login__form-row">
               <span className="login__form-title">pw</span>
               <input
                  className="login__form-input"
                  type="password"
                  id="password"
                  value={form.password}
                  onKeyDown={handleKeyDown}
                  onChange={handleInput}
               ></input>
            </div>
            <Link className="login__reglink" to="">
               Register Here
            </Link>
         </div>
      </div>
   );
}

export default Login;
