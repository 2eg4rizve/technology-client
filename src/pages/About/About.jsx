
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';

import { ScrollRestoration } from "react-router-dom";

const About = () => {

    useEffect(() => {

        AOS.init();

    }, [])
    return (
        <div className="mt-[50px] p-[20px] text-center" data-aos="fade-up">

            <ScrollRestoration />

            <p className="text-5xl font-bold text-center my-[40px] pt-[40px]">ABOUT</p>


            <p className="pt-[60px] pb-[60px] ">

                Welcome to R electronics, our hub for all things tech and electronics! Our passion for innovation drives us to keep you updated with the latest in the tech world. We offer in-depth reviews, news, and how-to guides to help you navigate the ever-changing landscape of gadgets and devices. Our goal is to empower you with knowledge, so you can make confident choices in the fast-paced world of technology. Join our community of tech enthusiasts and stay ahead of the curve.

                <br />
                <br />

                At R electronics, our mission is clear: to empower you with knowledge in the fast-paced world of technology. We are dedicated to simplifying complex tech topics, offering in-depth reviews, news, and how-to guides, helping you make informed decisions about the gadgets and devices that have become integral to our lives.

                <br />
                <br />


                Our team comprises dedicated technology enthusiasts and experts who are on the hunt for the most exciting and innovative developments in the tech and electronics world. We are committed to delivering quality content that educates, inspires, and engages our readers.

                <br />
                <br />

                We are dedicated to simplifying complex tech topics, offering reviews, news, guides, and keeping you ahead in the ever-evolving tech world




            </p>










        </div>
    );
};

export default About;