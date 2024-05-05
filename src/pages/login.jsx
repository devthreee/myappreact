import AuthLayouts from "../Layouts/AuthLayouts";
import FormLogin from "../Fragments/FormLogin";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login">
            <FormLogin/>
        </AuthLayouts>
    )
}

export default LoginPage;