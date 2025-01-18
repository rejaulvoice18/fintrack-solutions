import Company from "../../../components/Company/Company";
import Services from "../../../components/Services/Services";
import AllInfo from "../AllInfo/AllInfo";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Company></Company>
            <Services></Services>
            <AllInfo></AllInfo>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;