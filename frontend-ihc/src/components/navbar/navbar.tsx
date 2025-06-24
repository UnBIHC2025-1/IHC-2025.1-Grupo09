import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { LuHouse } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

function Navbar() {
  return (
    <header className="w-fit min-w-[300px] bg-white-005 p-4 rounded-xl">
      <ul className="flex items-center justify-around min-w-full gap-2 text-2xl">
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="">
                <Link className="flex items-center m-0" href="#home">
                  <LuHouse />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="px-4 py-1 text-sm rounded-full bg-white-005">
                Home
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="">
                <Link className="flex items-center m-0" href="#projects">
                  <MdOutlineWorkOutline />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="px-4 py-1 text-sm rounded-full bg-white-005">
                Projects
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link className="flex items-center m-0" href="#blog">
                  <TbEdit />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="px-4 py-1 text-sm rounded-full bg-white-005">
                Blog
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link className="flex items-center m-0" href="#contact">
                  <FiPhone />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="px-4 py-1 text-sm rounded-full bg-white-005">
                Contact Me
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
