import { TbBrandGithub } from "react-icons/tb";

const SingleProjectCard = ({ description, image, title, url, gitHub }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img
        className='w-full h-52 object-cover rounded-t-lg'
        src={image}
        alt='project img'
      />
      <div className='capitalize p-8 flex flex-col gap-5'>
        <h2 className='text-xl font-medium tracking-wide'>{title}</h2>
        <p className='text-slate-700 leading-loose'>{description}</p>
        <div className='flex gap-3'>
          <a
            href={url}
            target='blank'
            className='bg-emerald-800 text-emerald-50 py-2 px-6 rounded-lg hover:bg-emerald-600 duration-200'
          >
            take a look
          </a>
          <a href={gitHub} target='blank'>
            <TbBrandGithub className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
};
export default SingleProjectCard;
