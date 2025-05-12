
import { IconBrandInstagram, IconBrandTelegram, IconBrandYoutube, IconTargetArrow } from "@tabler/icons-react";
import Data from "../Data/Data";
import { Divider } from "@mantine/core";

const Footer = () => {
    return <div className="mt-20 pb-5 flex gap-5 justify-around">
        <div className="w-1/4 flex flex-col gap-4">
            <div className="flex gap-1 items-center text-bright-sun-500">
                <IconTargetArrow className="h-6 w-6" />
                <div className="text-xl font-bold ">Arbeite Wunder</div>
            </div>
            <div className="text-sm text-mine-shaft-300">
                Job portal with user profiles, skill updates, certifications, wrok experience and admin job postings.
            </div>
            <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
                <div><IconBrandInstagram /></div>
                <div><IconBrandTelegram /></div>
                <div><IconBrandYoutube /></div>
            </div>
        </div>

        {
            Data.footerLinks.map((item, index)=> <div key={index}>
                <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>{
                    item.link.map((link, i)=> <div key={i} className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out">{link}</div>)
                }
            </div>)
        }
        
    </div>
}

export default Footer;