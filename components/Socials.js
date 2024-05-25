import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </Link>
      <Link href={'https://www.instagram.com/vivekt_07?igsh=d3Y2aWN0YzYwNm9h'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://github.com/tvivek7'} className="hover:text-accent transition-all duration-300">
        <FaGithub />
      </Link>
      <Link href={'https://x.com/VivekTi55944585'} className="hover:text-accent transition-all duration-300">
        <FaTwitter />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>

    </div>
  );
};

export default Socials;
