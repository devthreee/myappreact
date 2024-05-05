import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormRegister = () => {
    return (
        <form action="">
        <InputForm 
          label="fullname" 
          type="texr" 
          placeholder="insert your fullname" 
          name="fullname"
          />
        <InputForm 
          label="Email" 
          type="email" 
          placeholder="example@email.com" 
          name="password"
          />
        <InputForm 
          label="Password" 
          type="password" 
          placeholder="*****" 
          name="password"
          />
        <InputForm 
          label="Confirm Password" 
          type="password" 
          placeholder="*****" 
          name="confirmPassword"
          />
        <Button classname="bg-blue-600">Register</Button>
      </form>
    )
}

export default FormRegister;