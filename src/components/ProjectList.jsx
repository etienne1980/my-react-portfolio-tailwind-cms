// import { projects } from "../data";
import { useFetchProjects } from "../utils/FetchProjects";
import SectionTitle from "./SectionTitle";
import SingleProjectCard from "./SingleProjectCard";

const ProjectList = () => {
  const { projects, isLoading } = useFetchProjects();

  if (isLoading) {
    return (
      <section className='align-element'>
        <h3>Application Loading ...</h3>
      </section>
    );
  }

  return (
    <section className='align-element py-20' id='projects'>
      <SectionTitle text={"react projects"} />
      <div className='py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {projects.map((item) => {
          // console.log(item);
          return <SingleProjectCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default ProjectList;
