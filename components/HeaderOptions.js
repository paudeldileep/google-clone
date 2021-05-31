import { SearchIcon,DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon } from "@heroicons/react/solid";
import HeaderOption from "./HeaderOption";


function HeaderOptions(){
    return(
        <div className="flex w-full text-gray-600 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">

            {/*left div */}

            <div className="flex space-x-4">
                <HeaderOption Icon={SearchIcon} title="All" selected/>
                <HeaderOption Icon={PhotographIcon} title="Images"/>
                <HeaderOption Icon={PlayIcon} title="Videos"/>
                <HeaderOption Icon={NewspaperIcon} title="News"/>
                <HeaderOption Icon={MapIcon} title="Maps"/>
                <HeaderOption Icon={DotsVerticalIcon} title="More"/>
            </div>

            {/*right div */}

            <div className="flex space-x-2">
                <p className="p_link">Settings</p>
                <p className="p_link">Tools</p>
                
            </div>

        </div>
    )
}

export default HeaderOptions;