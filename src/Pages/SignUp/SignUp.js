import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  const loading = true;
  return (
    <div className="mt-7 max-w-md mx-auto">
      <div className="card flex-shrink-0 shadow-xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              required
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
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
              required
              type="password"
              autoComplete="Password"
              placeholder="password"
              className="input input-bordered"
            />

            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already have an account ?
                <span className="text-primary">Login</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-1">
            <button
              type="submit"
              className={`btn btn-primary ${loading ? "btn-disabled" : ""}`}
            >
              {loading ? "Loading" : "SignUp"}
            </button>
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

export default SignUp;
