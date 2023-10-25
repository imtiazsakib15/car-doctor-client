import { Link } from "react-router-dom";
import loginImg from "./../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {user, createUser} = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
    .then(userCredential => {
      console.log(userCredential.user);
    })
  };

  return (
    <div className="hero py-16">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 lg:w-1/2 border py-10">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
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
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold"
              />
            </div>
          </form>
          <p className="pl-8">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
