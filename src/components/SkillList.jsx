import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SingleSkillCard from "./SingleSkillCard";

const SkillList = () => {
  return (
    <section className=' py-20 align-element' id='skills'>
      <SectionTitle text={"skills"} />
      <div className='py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {skills.map((item) => {
          // console.log(item);
          return <SingleSkillCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default SkillList;
