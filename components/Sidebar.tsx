"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";


interface SideBarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SideBarProps> = ({
    children
}) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
          icon: HiHome,
          label: 'Home',
          active: pathname !== '/search',
          href: '/'
        },
        {
          icon: BiSearch,
          label: 'Search',
          href: '/search',
          active: pathname === '/search'
        },
      ], [pathname]);

    return (
        <div className="flex h-full">
            <div 
                className="
                hidden 
                md:flex 
                flex-col 
                gap-y-2 
                bg-black 
                h-full 
                w-[300px] 
                p-2
                "
            >
                <Box>
                    sidebar navigation
                </Box>
                <Box className="overflow-y-auto h-full">
                    song library
                </Box>
            </div>
        </div>
    )
}

export default Sidebar;