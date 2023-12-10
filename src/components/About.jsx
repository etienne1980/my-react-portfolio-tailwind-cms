import aboutMeImg from "../assets/profile.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className='bg-white' id='about'>
      <article className=' align-element py-20 grid sm:grid-cols-2 items-center gap-16'>
        <img
          className='hidden sm:block h-64 w-full'
          src={aboutMeImg}
          alt='about me image'
        />
        <div>
          <SectionTitle text={"about me"} />
          <p className='text-slate-600 mt-6 leading-loose'>
            Passion led me to where I am today. After many years in sales and
            marketing, I knew that I wanted to explore my creativity and develop
            a new skill set. So I took a career break to fully immerse myself in
            learning front-end development.
          </p>
          <p className='text-slate-600 mt-6 leading-loose'>
            During this time, I discovered my passion for designing and building
            beautiful, functional websites. Every line of code I write is
            crafted with care to create a seamless user experience.
          </p>
          <p className='text-slate-600 mt-6 leading-loose'>
            I am thrilled to be able to combine my sales and marketing expertise
            with my new skills to help businesses succeed in the digital world.
          </p>
        </div>
      </article>
    </section>
  );
};
export default About;
