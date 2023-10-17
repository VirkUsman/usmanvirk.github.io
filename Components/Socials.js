import Link from "next/link";

import {
  RiGithubLine,
  RiXingLine,
  RiLinkedinLine,
  RiYoutubeLine,
  RiFacebookLine,
  RiTwitterXLine,
  RiFilePdf2Line,
} from "react-icons/ri";

import { BsArrowRight, BsArrowUpCircleFill, BsArrowUp } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/VirkUsman"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.xing.com/profile/Usman_Virk023532"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiXingLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/usman-virk"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      {/* <Link
        href={"https://www.youtube.com/channel/UCmetTl7zsZxADEgfTipAEwQ"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link> */}
      {/* <Link
        href={
          "https://www.facebook.com/people/"
        }
        className=" hover:text-space transition-all duration-300"
      >
        <RiFacebookLine />
      </Link> */}
      <Link
        href={"https://twitter.com/VirkUsman9428"}
        className=" hover:text-space transition-all duration-300"
      >
        <RiTwitterXLine />
      </Link>

      <a
        href="/CV_UV.pdf"
        download="UsmanVirk_CV"
        className=" rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-500 flex items-center justify-center overflow-hidden hover:border-space group"
      >
        <span className="text-space group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-700">
          Resume
        </span>
        <BsArrowUp className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[22px]" />
      </a>
    </div>
  );
};
RiFilePdf2Line;
export default Socials;
