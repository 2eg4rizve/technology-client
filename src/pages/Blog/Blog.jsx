/* eslint-disable react/no-unescaped-entities */
import { ScrollRestoration } from "react-router-dom";


const Blog = () => {
    return (
        <div>
              <ScrollRestoration />
            <p className="text-5xl font-bold text-center my-[40px] pt-[40px]">Blog</p>
            <div>
                <div className="mt-[50px]  p-[30px]">

                    <div className="mb-[20px]">
                        <p className="font-bold"> SarahSmith (Samsung Galaxy):</p>
                        <p>As a loyal Samsung Galaxy user, your detailed coverage of Samsung products, including the Galaxy series, is invaluable. Your site is my go-to source for tech insights.</p>
                    </div>

                    <div className="mb-[20px]">
                        <p className="font-bold"> TechEnthusiast21 (iPhone 12 pro):</p>
                        <p>Your site is a goldmine of information for tech enthusiasts like me, especially when it comes to the iPhone. I love how you cover all the major players in the tech industry, from Apple to Intel. Keep the updates coming!</p>
                    </div>
                    <div className="mb-[20px]">
                        <p className="font-bold"> TechJunkie101 (Gaming Laptops hp x12 pro ):</p>
                        <p>Your gaming laptop reviews are top-notch! You've helped me make an informed choice for my gaming rig. Keep up the excellent work.</p>
                    </div>
                   
                    <div className="mb-[20px]">
                        <p className="font-bold">TechGeek23 (iPhone 12): </p>
                        <p>Your website is a treasure trove of information for mobile phone enthusiasts like me, especially when it comes to the iPhone 12. I appreciate your comprehensive coverage of this latest smartphone and its accessories. Keep those iPhone 12 reviews coming</p>
                    </div>
                    <div className="mb-[20px]">
                        <p className="font-bold"> TabletExplorer (iPad Pro 2021):</p>
                        <p>I'm all about tablets, and your detailed reviews and comparisons of tablets like the iPad Pro 2021 are a huge help when I'm looking for a new one. Your site is my go-to for tablet-buying advice</p>
                    </div>
                    <div className="mb-[20px]">
                        <p className="font-bold"> MouseMaster (Logitech MX Master 3):</p>
                        <p>Your insights on computer mice, like the Logitech MX Master 3, are spot-on. I've found the perfect mouse for my work setup thanks to your recommendations. Kudos</p>
                    </div>
                    <div className="mb-[20px]">
                        <p className="font-bold">PhoneEnthusiast007 (Google Pixel 6): </p>
                        <p>Feature phones like the Google Pixel 6 are often overlooked, but your site gives them the attention they deserve. I've discovered some hidden gems thanks to your articles.</p>
                    </div>
                    <div className="mb-[20px]">
                        <p className="font-bold">LaptopLover (Dell XPS 15): </p>
                        <p>Your laptop reviews, especially of models like the Dell XPS 15, are the best I've come across. You've guided me through the maze of laptop options, making my choice a breeze. Keep it up!</p>
                    </div>

                    <div className="mb-[20px]">
                        <p className="font-bold">PCWhiz (Lenovo ThinkCentre M920): </p>
                        <p></p>
                    </div>

                    <div className="mb-[20px]">
                        <p className="font-bold"> </p>
                        <p>Your coverage of desktop PCs, including the Lenovo ThinkCentre M920, is top-notch. You've helped me build my dream rig, and I'm grateful for your expert insights</p>
                    </div>

                    <div className="mb-[20px]">
                        <p className="font-bold">MonitorMania (Dell Ultrasharp U2719D): </p>
                        <p>I'm a stickler for the perfect monitor, like the Dell Ultrasharp U2719D, and your in-depth monitor reviews have been invaluable. Your site is my go-to for display recommendations.</p>
                    </div>

                    <div className="mb-[20px]">
                        <p className="font-bold"> </p>
                        <p></p>
                    </div>

                    <div className="mb-[20px]">
                        <p className="font-bold"> </p>
                        <p></p>
                    </div>

                    <div className="mb-[20px]">
                        <p className="font-bold"> </p>
                        <p></p>
                    </div>


                </div>


                <div className="mt-[100px] space-y-3">
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs border-[#F4E869] border-2" />
                    <br />
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs border-[#F4E869] border-2" />

                    <textarea className="textarea border-[#F4E869] border-2 w-full min-h-[200px]" placeholder="Type Your Comment"></textarea>

                    <button className="btn btn-primary text-black w-full bg-[#F4E869]">Submit</button>

                </div>

            </div>


        </div>
    );
};

export default Blog;