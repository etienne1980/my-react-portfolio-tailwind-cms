import { useState } from "react";
import { links } from "../data";

const Navbar = () => {
  const [link, setLink] = useState(links);
  // console.log(link);

  return (
    <nav className='bg-emerald-100' id='up'>
      {/* max w 1280 px */}
      <div className=' align-element flex flex-col sm:flex-row sm:gap-x-16 sm:justify-between sm:items-center'>
        <h2 className='text-3xl font-bold'>
          web<span className='text-emerald-600'>dev</span>
        </h2>
        <div className='flex gap-x-3 mt-2 sm:flex-row sm:gap-x-5'>
          {links.map((item) => {
            const { id, text, href } = item;
            return (
              <a
                className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-150'
                key={id}
                href={href}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
