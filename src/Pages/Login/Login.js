import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-7 max-w-md mx-auto">
      <div className="card w-full  shadow-xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              autoComplete="Password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link to="/signup" className="label-text-alt link link-hover">
                Don't have an account ?
                <span className="text-primary">Register Now</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
        </form>
        <div className="form-control mt-7">
          <button className="btn btn-primary">
            Login With Google <FcGoogle className="ml-2" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
