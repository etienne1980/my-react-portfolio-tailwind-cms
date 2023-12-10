import { contact } from "../data";
import GoUp from "./GoUp";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section id='contact' className=' rounded-lg shadow-xl bg-emerald-100 '>
      <div className='align-element'>
        <SectionTitle text={"get in touch"} />
        <div className='grid md:grid-cols-3 py-6'>
          {contact.map((item) => {
            const { id, text, title, icon } = item;
            //   optional chaining for the href
            const url = item?.href;
            return (
              <div
                key={id}
                className=' flex items-center justify-center gap-3 mt-5'
              >
                <a href={url} target='blank'>
                  {icon}
                </a>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <a href='#up'>
          <GoUp />
        </a>
      </div>
    </section>
  );
};
export default Contact;
