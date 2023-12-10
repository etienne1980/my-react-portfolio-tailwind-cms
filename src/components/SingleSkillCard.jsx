const SingleSkillCard = ({ icon, title, text }) => {
  //   console.log(prop);
  return (
    <article className='flex flex-col justify-center items-center gap-5'>
      <span>{icon}</span>
      <h2 className='font-bold'>{title}</h2>
      <p className='text-center text-slate-500'>{text}</p>
    </article>
  );
};
export default SingleSkillCard;
