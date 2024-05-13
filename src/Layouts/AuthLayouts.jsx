import { Children } from "react";
import { Link } from "react-router-dom";

const AuthLayouts = ( props ) => {
    const { title, children, type } = props;
    return (
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
        <h1 className="test-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}

        {/* Menggunakan Ternary Operation */}
        {/* <p className="test-sm mt-5 text-center">
          {type === "login" 
          ? "Don't have an account ? "
          : "Already have an account ? "}

          {type === "login" && (
              <Link to="/register" className="font-bold text-blue-600">
              Register
          </Link>
          )}

          {type === "register" && (
              <Link to="/login" className="font-bold text-blue-600">
              Login
          </Link>
          )}        
        </p> */}
        {/* Menggunakan Ternary Operation

        {/* Menggunakan Component Conditional IF Operator */}
        <Navigation type={type} />  
        {/* Menggunakan Component Conditional IF Operator */}
      </div>
      </div>
    )
}

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="test-sm mt-5 text-center">
        Don't have an account ? {" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
  )} else {
    return (
      <p className="test-sm mt-5 text-center">
        Already have an account ? {" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    )
  }
}
   
    

export default AuthLayouts;