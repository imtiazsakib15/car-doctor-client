import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "./../../assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  // const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");

        // get access token
        // const user = { email };
        // axios
        //   .post("http://localhost:5000/jwt", user, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success)
        //       navigate(location?.state ? location.state : "/");
        //   });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero py-16">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 lg:w-1/2 border py-10">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
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
                <Link className="label-text-alt link link-hover text-blue-600">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold"
              />
            </div>
          </form>
          <p className="pl-8">
            New to Car Doctor?
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
