import { Avatar } from "@mantine/core";
import Data  from "../Data/Data";
const Working = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl font-bold text-mine-shaft-100 text-center mb-3">
            How it<span className="text-bright-sun-400"> Works</span>
        </div>
        <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto font-semibold mb-10">
            Effortlessly navigate through the process and land your dream job.
        </div>
        <div className="flex px-20 justify-between items-center">
            <div className="relative">
                <img className="w-[40rem]" src="/Girl.png" alt="girl" />
                <div className="w-36 flex top-[25%] right-3 absolute flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-4 px-2 backdrop-blur-md">
                    <Avatar className="h-19 w-19" src="avatar1.png" alt="it's me" />
                    <div className="text-sm font-semibold text-mine-shaft-200 text-center">Complete Your Profile</div>
                    <div className="text-xs text-mine-shaft-300">70% Completed</div>
                </div>
            </div>

            <div className="flex flex-col gap-10">
                {
                    Data.work.map((item, index) => <div key={index} className="flex items-center gap-4">
                    <div className="p-2.5 bg-bright-sun-300 rounded-full">
                        <img className="h-12 w-12" src={`/Working/${item.name}.png`} alt={item.name} />
                    </div>
                    <div>
                        <div className="text-mine-shaft-200 text-xl font-semibold">{item.name}</div>
                        <div className="text-mine-shaft-300">{item.desc}</div>
                    </div>
                </div>)
                }
            </div>
        </div>

        <div>

        </div>

    </div>

    
}
export default Working;