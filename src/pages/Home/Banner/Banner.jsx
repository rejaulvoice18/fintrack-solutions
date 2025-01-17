// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import BannerSlide from '../../../components/BannerSlide/BannerSlide';

const Banner = () => {
    const axiosPublic = useAxiosPublic();

    const { data: slides = [] } = useQuery({
        queryKey: ['slider-data'],
        queryFn: async () => {
            const res = await axiosPublic.get('/slider-data');
            return res.data
        }
    })
    return (
        <div className='bg-pink-700'>
            <div className='py-3 max-w-screen-xl mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
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
                    {
                        slides.map(slide => <SwiperSlide key={slide._id}>
                            <BannerSlide
                                slide={slide}
                            >
                            </BannerSlide>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;