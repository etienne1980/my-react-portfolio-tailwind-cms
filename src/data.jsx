/* this file has to be jsx in order for the icon (which are componets) to work */

import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGithubSquare,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  // { id: nanoid(), href: "#contact", text: "contact" },
];

export const contact = [
  {
    id: nanoid(),
    title: "linkedin",
    text: "LinkedIn",
    icon: (
      <FaLinkedin className='text-slate-500 text-2xl hover:text-black duration-300' />
    ),
    href: "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit",
  },
  {
    id: nanoid(),
    title: "mobile",
    text: "+34 617 79 1479",
    icon: (
      <FaPhone className='text-slate-500 text-2xl hover:text-black duration-300' />
    ),
    href: "#",
  },
  {
    id: nanoid(),
    title: "email",
    text: "andrea.desantis2@gmail.com",
    icon: (
      <FaEnvelope className='text-slate-500 text-2xl hover:text-black duration-300' />
    ),
    href: "#",
  },
];

export const socialIcon = [
  {
    id: nanoid(),
    icon: (
      <FaGithubSquare className='text-slate-500 text-3xl hover:text-black duration-300' />
    ),
    href: "https://github.com/",
  },
  {
    id: nanoid(),
    icon: (
      <FaLinkedin className='text-slate-500 text-3xl hover:text-black duration-300' />
    ),
    href: "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit",
  },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];
