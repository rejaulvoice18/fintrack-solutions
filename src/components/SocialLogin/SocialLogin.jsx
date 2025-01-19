import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { googleSignInPop } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignInPop()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    bank_account_no: '12353454556456',
                    salary: '1200',
                    role: 'employee',
                    designation: 'Sales Assistant',
                    image: result.user?.photoURL,
                    isVerified: 'false',
                    isFired: 'false'
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        navigate('/');
                    })

            })
    }

    return (
        <div className='flex flex-col mx-auto mb-8'>
            <div className='divider'></div>
            <div>
                <button
                    onClick={handleGoogleSignIn}
                    className='btn'>
                    <FaGoogle className='mr-2'></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;