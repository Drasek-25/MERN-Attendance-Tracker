import { Link } from "react-router-dom";

function Login() {
   return (
      <div className="login-view">
         <div className="login-card">
            <h2 className="login-card__title">Login</h2>
            <div className="login-card__un">
               <span className="login-card__un-title">un</span>
               <input className="login-card__un-input"></input>
            </div>
            <div className="login-card__pw">
               <span className="login-card__pw-title">un</span>
               <input className="login-card__pw-input"></input>
            </div>
            <Link to="">Register Here</Link>
         </div>
      </div>
   );
}

export default Login;
