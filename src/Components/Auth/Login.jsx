import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Login = () => {
  const {login} = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
    const handelSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        login(email,password)
        .then((result) => {
          // Signed in 
          const user = result.user;
          navigate(location?.state ? location.state : '/')
          form.reset();
          // ...
        })
        .catch((error) => {
          
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  return (
    <div>
      <Navbar/>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col-reverse-reverse">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-2 p-4">
              {`Don't Have an Account!`} please{" "}
              <Link className="text-blue-600" to={"/register"}>
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
