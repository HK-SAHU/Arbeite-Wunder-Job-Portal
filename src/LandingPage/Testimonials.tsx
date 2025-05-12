import Data from "../Data/Data";
import { Rating } from '@mantine/core';


const Testimonials = () => {
    return (
        <div className='mt-20  pb-5 '>
            <div className='text-4xl text-center mb-3 font-semibold text-mine-shaft-100'>What
                <span className='text-bright-sun-400'> Users </span>Says About Us?
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-2'>
                {
                    Data.testimonials.map((test, index) =>
                        <div key={index} className='flex flex-col items-center border-bright-sun-300 gap-2 p-3 border rounded-xl mt-4 hover:shadow-[0_0_5px_1px_#FFCA28] transition-shadow duration-300 '>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={test.avatar} alt="it's me" className='h-14 w-14 rounded-full object-cover' />
                                <div className="flex flex-col items-center">
                                    <div className='text-lg text-mine-shaft-100 font-semibold text-center'>{test.name}</div>
                                    <Rating className="self-center" value={test.rating} fractions={2} readOnly />
                                </div>
                                <div className='text-xs text-mine-shaft-300'>
                                    {test.desc}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Testimonials;