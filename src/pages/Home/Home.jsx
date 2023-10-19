import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import Faq from "../../components/Faq/Faq";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Speciality from "../Speciality/Speciality";


const Home = () => {
    return (
        <div>

           <Banner></Banner>
           <Brand></Brand>
           <About></About>
           <Speciality></Speciality>
           <Faq></Faq>
           <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;