import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Company = () => {
    return (
        <div className="bg-black"> 
            <div className="max-w-screen-xl mx-auto py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className='flex gap-3 text-2xl font-bold text-gray-500 items-center justify-center'>
                        <span><FaGoogle /></span>
                        <a href="">Google</a>
                    </div>
                    <div className='flex gap-3 text-2xl font-bold text-gray-500 justify-center  items-center'>
                        <span><FaTwitter /></span>
                        <a href="">Twitter</a>
                    </div>
                    <div className='flex gap-3 text-2xl font-bold text-gray-500 justify-center items-center'>
                        <span><FaInstagram /></span>
                        <a href="">Instagram</a>
                    </div>
                    <div className='flex gap-3 text-2xl font-bold text-gray-500 justify-center items-center'>
                        <span><FaFacebook /></span>
                        <a href="">Facebook</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;