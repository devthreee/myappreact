const Button = (props) => {

    const { children, classname = "bg-black", onClick=() => {}, type } = props;
  
    return (
      <button
      className={`h-10 px-6 font-emibold rounded-md ${classname} text-white`}
      type={type}
      // onClick={() => onClick()}
      onClick={() => onClick()}
      >
      {children}
      </button>
    )
  
  }
  
  export default Button
