const SectionTitle = ({ text }) => {
  // console.log(prop);
  return (
    <div className='border-b border-grey-200 pb-5 text-center'>
      <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  );
};
export default SectionTitle;
