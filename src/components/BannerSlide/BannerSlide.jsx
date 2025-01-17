

const BannerSlide = ({slide}) => {
    const {image, title, headline, details} = slide || {}
    return (
        <div className='md:flex md:items-center md:justify-center gap-10 px-10'>
           <div className='flex flex-col gap-4 justify-center md:w-2/6 pr-3'>
                <p className='font-bold text-yellow-200'>{title}</p>
                <h2 className='text-6xl text-white font-bold'>{headline}</h2>
                <p className='text-white'>{details}</p>
            </div>
            <div className="md:w-4/6 pl-5">
                <img className='h-[400px] w-full md:h-[500px] lg:h-[650px] lg:w-[600px] py-10' src={image} alt="" />
            </div>
        </div>
    );
};

export default BannerSlide;