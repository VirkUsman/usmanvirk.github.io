import Link from "next/link";

import {RiTwitterXLine, RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiXingLine, } from "react-icons/ri"

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-lg">
            <Link href={''} className=" hover:text-space transition-all duration-300">
            <RiTwitterXLine />
            </Link>
            <Link href={''} className=" hover:text-space transition-all duration-300">
            <RiFacebookLine />
            </Link>
            <Link href={''} className=" hover:text-space transition-all duration-300">
            <RiInstagramLine />
            </Link>
            <Link href={''} className=" hover:text-space transition-all duration-300">
            <RiLinkedinLine />
            </Link>
            <Link href={''} className=" hover:text-space transition-all duration-300">
            <RiXingLine />
            </Link>
        </div>
    );
}

export default Socials;