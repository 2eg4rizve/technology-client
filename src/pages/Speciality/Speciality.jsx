import { useContext, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { AuthContext } from "../../Provider/AuthProvider";

const Speciality = () => {

    const { isDarkMode } = useContext(AuthContext);

    useEffect(() => {

        AOS.init();

    }, [])
    return (
        <div style={{ background: isDarkMode ? "black" : "#99DBF5" , color: isDarkMode ? "white" : "black" } } className="pb-[10px]" data-aos="fade-up" >
            <ScrollRestoration />
           

            <p className="text-5xl font-bold text-center my-[60px] pt-[40px]">Speciality</p>

            <div className="space-y-5 font-semibold  ps-[15px] mb-[150px]">
                <li>Product Reviews and Comparisons: Focus on providing in-depth, unbiased reviews of the latest gadgets, devices, and electronics. You can also create detailed product comparisons to help users make informed purchasing decisions.</li>

                <li>
                    Tech News and Updates: Become a reliable source for breaking news and updates in the tech industry. Cover product launches, software updates, and industry trends in real-time.
                </li>

                <li>
                    DIY Electronics Projects: Cater to tech enthusiasts and hobbyists by providing step-by-step guides for building electronic devices, troubleshooting, or modifying existing gadgets.
                </li>

                <li>
                    Tech Education and Tutorials: Create a platform for educational content, such as tutorials, online courses, and guides that help users learn about electronics, programming, or using specific software and devices.
                </li>
                <li>
                    Tech Insights and Analysis: Offer in-depth analysis and commentary on industry developments, market trends, and the impact of technology on various aspects of society, business, and daily life.
                </li>

                <li>
                    Tech Sustainability and Green Electronics: Focus on the environmental and sustainability aspects of technology, covering eco-friendly gadgets, recycling, and ways to reduce electronic waste.
                </li>
                <li>
                    Gaming and Entertainment: Specialize in gaming and entertainment tech, providing reviews, news, and guides related to gaming consoles, PCs, gaming accessories, and streaming platforms.
                </li>
                <li>
                    Emerging Technologies: Explore and discuss emerging technologies such as artificial intelligence, augmented reality, virtual reality, and quantum computing, keeping your audience informed about the latest innovations.
                </li>
                <li>
                    E-Commerce and Deals: Curate deals, discounts, and special offers on tech products, helping users find the best bargains and value for their money.
                </li>
                <li>
                    Community and Forums: Create an online community or forum where tech enthusiasts can discuss, share experiences, and seek advice on various tech-related topics.
                </li>
                <li>
                    Tech for Specific Niches: Narrow your focus to cater to a specific niche within the technology and electronics industry, such as smart home devices, wearables, automotive tech, or medical electronics.
                </li>
                <li>
                    Product Repair and Maintenance: Provide detailed guides on repairing and maintaining electronic devices, extending their lifespan and saving users money.
                </li>

            </div>
        </div>
    );
};

export default Speciality;