/* eslint-disable react/no-unescaped-entities */


import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Faq = () => {
    const { isDarkMode } = useContext(AuthContext);

    useEffect(() => {

        AOS.init();

    }, [])


    return (

        <div className="my-[50px] bg-[#F8FF95]"  data-aos = "fade-up" style={{ background: isDarkMode ? "#282A3A" : "white" , color: isDarkMode ? "white" : "black" }}>

            <h1 className="text-5xl font-bold text-center pt-[20px]">Frequently Asked Questions </h1>

            <div className="space-y-3 mt-[40px]" >

                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    What is the latest product released by Apple?
                    </div>
                    <div className="collapse-content">
                        <p> The latest product released by Apple can vary depending on the time you're asking this question. To stay updated on their latest releases, visit Apple's official website or check reliable tech news sources.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    What are the key features of the latest Samsung Galaxy smartphone?
                    </div>
                    <div className="collapse-content">
                        <p>The features of the latest Samsung Galaxy smartphone can change with each new release. Visit Samsung's official website or read product reviews from reputable tech websites to get detailed information about the latest model.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    How does Sony's PlayStation 5 compare to the Xbox Series X in terms of performance?
                    </div>
                    <div className="collapse-content">
                        <p> The performance comparison between the PlayStation 5 and the Xbox Series X depends on various factors. You can find detailed comparisons and reviews on gaming and tech websites to help you make an informed decision.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    What's the latest innovation from Google in the tech industry?
                    </div>
                    <div className="collapse-content">
                        <p>Google is known for various innovations. To stay updated, you can visit their official blog or follow tech news outlets for announcements on their latest projects and products.</p>
                    </div>
                </div>



                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    How can I protect my electronic devices from malware and viruses?
                    </div>
                    <div className="collapse-content">
                        <p>To protect your electronic devices from malware and viruses, it's essential to install reputable antivirus software, keep your operating system and software updated, and practice safe internet browsing and email habits. Regularly back up your data to avoid data loss.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    What are the essential factors to consider when purchasing a new smartphone or laptop?
                    </div>
                    <div className="collapse-content">
                        <p> To stay updated, you can visit our official blog or follow tech news outlets for announcements on their latest projects and products.</p>
                    </div>
                </div>




            </div>

        </div>

    );
};

export default Faq;