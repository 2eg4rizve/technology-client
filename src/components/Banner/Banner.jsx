
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div>

            <div className='flex mb-[20px] pt-[5px] z-0'>
                <button className='btn btn-primary bg-[#78C1F3] text-black'>Contact Us</button>
                <Marquee pauseOnHover={true} speed={150}>
                    <p className='text-red-500 mr-[50px]'>Mobile : 01877777777</p>
                    <p className='text-red-500 mr-[50px]'>Mobile : 01988888888</p>
                    <p className='text-red-500 mr-[50px]'>Mobile : 01766666666</p>
                    <p className='text-red-500 mr-[50px]'>Email : Riz@gmail.com</p>
                    <p className='text-red-500 mr-[50px]'>Facebook : Riz@gmail.com</p>
                    <p className='text-red-500 mr-[50px]'>Address : Halishahar, Chittagong</p>
                </Marquee>
            </div>

            <Swiper
                style={{
                    "--swiper-pagination-color": "red",
                    "--swiper-navigation-color": "green",
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"

            >

                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/T1KtCcb/photo-1496181133206-80ce9b88a853-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/Fxcrrns/photo-1515378960530-7c0da6231fb1-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/Twtfb1S/photo-1588702547923-7093a6c3ba33-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/9nbTXDq/photo-1621768216002-5ac171876625-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/bL1bsKT/2048px-HP-logo-2012-svg.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/hM885Nv/photo-1662947995689-ec5165848ad0-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/gtqXtBd/images-q-tbn-ANd9-Gc-Rnsr-GGil0-VEGLGj-V5z7tt-U6-Fr-Nr-H5b-E75yjg-usqp-CAU.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/f1wkF4M/photo-1572059002053-8cc5ad2f4a38-auto-format-fit-max-q-80-blend-000000-blend-alpha-10-blend-mode-nor.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/m6mngLj/Intel-Logo.png" alt="" /></SwiperSlide>

               

            </Swiper>

        </div>
    );
};

export default Banner;