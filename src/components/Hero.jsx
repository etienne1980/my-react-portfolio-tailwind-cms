import heroImg from "../assets/hero2.svg";
import { socialIcon } from "../data";

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className=' mx-auto align-element sm:grid sm:grid-cols-2 sm:items-center sm:gap-x-8'>
        <article className='capitalize tracking-wider'>
          <h1 className='font-bold text-6xl'>hello, my name is andrea</h1>
          <p className='mt-5 text-3xl text-slate-700'>
            I am a front-end developer living in barcelona
          </p>
          <p className='mt-5  text-slate-700 text-2xl'>
            my goal is to turn ideas into interactive reality
          </p>
          <div className='flex justify-left gap-x-4 mt-4'>
            {socialIcon.map((item) => {
              const { icon, href, id } = item;
              return (
                <a
                  //  the style is added to the icon component into data file directly
                  key={id}
                  href={href}
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </article>
        <article className='hidden sm:block sm:justify-self-center'>
          <img src={heroImg} className='sm:h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;
