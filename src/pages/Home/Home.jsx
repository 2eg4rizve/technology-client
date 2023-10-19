
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import DarkMode from "../../components/DarkMode/DarkMode";
import Faq from "../../components/Faq/Faq";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Speciality from "../Speciality/Speciality";


const Home = () => {

    const { isDarkMode } = useContext(AuthContext);
   
    return (
        <div  style={{ background: isDarkMode ? "#001C30" : "white" , color: isDarkMode ? "white" : "black" }}>

            

       

            {/* style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" } } */}

            <DarkMode></DarkMode>

            <Banner ></Banner>
            <Brand ></Brand>
            <About ></About>
            <Speciality></Speciality>
            <Faq></Faq>
            <ContactUs></ContactUs>



        </div>
    );
};

export default Home;