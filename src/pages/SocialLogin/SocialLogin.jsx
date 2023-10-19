/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';

const SocialLogin = () => {

    const { user, googleLogin, githubLogin } = useContext(AuthContext);

    // console.log(user)

    const navigate = useNavigate();

    const location = useLocation();



    const handleSocialLogin = (media) => {
        media()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'OK...',
                    text: "Welcome! Your Account Is Now Active",

                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...Try Again',
                    text: error.message,

                })
            })
    }


    return (
        <>
            <div className="px-6 pb-6">
                <div className="text-center mb-[10px]">continue with</div>
                <div className="">

                    <button
                        onClick={() => handleSocialLogin(googleLogin)}
                        className="btn btn-primary w-full  text-black bg-[#78C1F3] mb-[20px] p-4">Google
                    </button>
                    


                    <button
                        onClick={() => handleSocialLogin(githubLogin)}
                        className="btn btn-primary  w-full text-black bg-[#78C1F3]">Github
                    </button>





                </div>
            </div>
        </>
    );
};

export default SocialLogin;