import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-500">Unlock Your Future <span>Discover</span> <span>Jobs</span> That Match Your Passion</div>
                <div className="text-lg text-mine-shaft-200">A Great Life Starts with the Right Company — Explore Thousands of Jobs in One Place</div>
                <div className="flex gap-3 mt-5">
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Title" placeholder="Software Engineer" />
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Type" placeholder="Full Time" />
                    <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className="h-[85%] w-[85%]" />
                    </div>
                </div>
            </div>

            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/Boy_Home.png" alt="boy" />
                    <div className="absolute top-[50%] w-fit -right-10 border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                        <div className="text-center  mb-1 text-sm text-mine-shaft-100">10K+ GOT JOB</div>
                        <Avatar.Group>
                            <Avatar src="avatar.png" />
                            <Avatar src="avatar1.png" />
                            <Avatar src="avatar2.png" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="absolute top-[28%] w-fit -left-5 border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 ">
                        <div className="flex gap-2 items-center mb-3">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                                <img src="/google.png" alt="" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">Mumbai, India</div>
                            </div>
                        </div>
                        
                        <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                            <span>1 Day Ago</span>
                            <span>500+ Applicants</span>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DreamJob;
