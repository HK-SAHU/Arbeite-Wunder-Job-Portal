import { Avatar, Indicator, NavLink } from "@mantine/core";
import { IconBell, IconSettings, IconTargetArrow } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header =()=>{
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
        <div className="flex gap-1 items-center border-bright-sun-400 text-bright-sun-500">
            <IconTargetArrow className="h-8 w-8"/> 
            <div className="text-2xl font-bold ">Arbeite Wunder</div>
            
        </div>

       {NavLinks()}

        <div className="flex gap-5 items-center">
            
            <div className="flex gap-1 items-center">
                <Avatar src="avatar.png" alt="it's me" />
                <div>Harsh</div>
            </div>

            <div className="bg-mine-shaft-900 p-1.5 rounded-full items-center">
                <IconSettings stroke={1.5}/>
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full items-center">
            <Indicator inline processing color="brightSun.4" offset={6} size={8}>
                <IconBell stroke={1.5}/>
            </Indicator>
            </div>

            
        </div>
    </div>
}
export default Header;