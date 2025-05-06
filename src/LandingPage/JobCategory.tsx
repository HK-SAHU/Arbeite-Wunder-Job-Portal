import { Carousel } from '@mantine/carousel';
import Data from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-bold text-mine-shaft-100 text-center mb-3">
        Browse <span className="text-bright-sun-400">Job</span> Categories
      </div>
      <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto font-semibold mb-10">
        Explore job opportunities matched to your skills and take the next step in your career journey today.
      </div>

      <Carousel slideSize="22%" slideGap="xs" loop className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 
      [&_button]:!border-none [&_buton]:hover:!opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100" 
      nextControlIcon={<IconArrowRight className="h-8 w-8" />}
      previousControlIcon={<IconArrowLeft className="h-8 w-8" />}>
        {
          Data.jobCategory.map((category, index) =>
            <Carousel.Slide key={index}>
              <div className="flex flex-col items-center w-65 gap-2 border-2 border-bright-sun-400 p-5 
              transition duruation-300 ease-in-out rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 !shadow-bright-sun-300">
                <div className="p-2 bg-bright-sun-300 rounded-full">
                  <img className="h-8 w-8" src={`/Category/${category.image}`} alt={category.name} />
                </div>
                <div className="text-mine-shaft-100 text-xl font-semibold">{category.name}</div>
                <div className="text-sm text-mine-shaft-300 text-center">{category.description}</div>
                <div className="text-bright-sun-300 text-lg text-center">{category.jobs} + New Jobs Posted</div>
              </div>
            </Carousel.Slide>
          )}
      </Carousel>
    </div>
  );
};

export default JobCategory;