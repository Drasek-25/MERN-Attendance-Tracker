import { Link } from "react-router-dom";

function Login() {
   return (
      <div className="login-view">
         <div className="login-card">
            <h2 className="login-card__title">Login</h2>
            <div className="login-card__form">
               <span className="login-card__form-title">un</span>
               <input className="login-card__form-input" type="text"></input>
            </div>
            <div className="login-card__form">
               <span className="login-card__form-title">pw</span>
               <input
                  className="login-card__form-input"
                  type="password"
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
