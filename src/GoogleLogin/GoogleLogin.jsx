import { useContext } from "react";
import { AuthContext } from "../routes/AuthProvider";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {

    const { googleLogin } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleGoogleLogin = (google) => {
        google()
        .then(result => {
            console.log(result.user);
            navigate('/home')
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <p className='divider'>continue with</p>
            <div className="text-center">
                <button onClick={() => handleGoogleLogin(googleLogin)} className="btn btn-outline">Google login</button>
            </div>
        </div>
    );
};

export default GoogleLogin;