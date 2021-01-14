import beauty from "../images/beauty-1.jpg";
import gym from "../images/gym-2.jpg";
import onlinecloth from "../images/onlinecloth-3.jpg";
import porfolio from "../images/portfolio-4.jpg";
import school from "../images/school-5.jpg";
import beach from "../images/beach-6.jpg";
import alan from "../images/alan-7.jpg";
import phone from "../images/phone-store-7.png";

// for navbar

let Links = [
  {
    id: 1,
    link: "Home",
    path: "/",
    scrolling: "Home",
  },

  {
    id: 2,
    link: "About",
    path: "/about",
    scrolling: "About",
  },

  {
    id: 3,
    link: "Skills",
    path: "/skills",
    scrolling: "Skills",
  },

  {
    id: 4,
    link: "Projects",
    path: "/projects",
    scrolling: "Projects",
  },

  //   {
  //     id: 5,
  //     link: 'About',
  //     path: '/about',
  //     scrolling: 'About',
  //   },

  {
    id: 6,
    link: "Contact",
    path: "/contact",
    scrolling: "Contact",
  },
];

// skills development
// options for percent:ninety,eighty,senenty,eighty,fifty,thirty
export const devSkills = [
  {
    id: 1,
    title: "HTML5",
    percent: "ninety",
    number: "90%",
  },
  {
    id: 2,
    title: "CSS3",
    percent: "ninety",
    number: "90%",
  },
  {
    id: 3,
    title: "JAVASCRIPT",
    percent: "eighty",
    number: "80%",
  },
  {
    id: 4,
    title: "REACT",
    percent: "eighty",
    number: "80%",
  },
  {
    id: 5,
    title: "BOOTSTRAP",
    percent: "fifty",
    number: "50%",
  },
  {
    id: 6,
    title: "NODE JS",
    percent: "thirty",
    number: "30%",
  },
];

// skills electrical
export const electricSkills = [
  {
    id: 1,
    title: "ELECTRICAL STUDIES",
    percent: "ninety",
    number: "90%",
  },
  {
    id: 2,
    title: "DOMESTIC INSTALLATIONS",
    percent: "ninety",
    number: "90%",
  },
  {
    id: 3,
    title: "PHOTOVOLTAIC SYSTEMS",
    percent: "ninety",
    number: "90%",
  },
  {
    id: 4,
    title: "ELECTRICAL AUTOMOTIONS",
    percent: "eighty",
    number: "80%",
  },
];

// projects
export default [
  {
    id: 8,
    category: "react",
    filtering: ["all", "react"],
    extlink: "https://comfyy.netlify.app",
    img: alan,
    language: "REACT/UI COMPONENT",
    title: "React ecommerce",
  },
  {
    id: 7,
    category: "react",
    filtering: ["all", "react"],
    extlink: "https://alan-voice-reader.netlify.app",
    img: alan,
    language: "REACT/MATERIAL UI",
    title: "news voice recognition",
  },
  {
    id: 8,
    category: "react",
    filtering: ["all", "react"],
    extlink: "https://phone-store.vercel.app/",
    img: phone,
    language: "REACT JS/ FULLSTACK",
    title: "phone store",
  },
  {
    id: 1,
    category: "javascript",
    filtering: ["all", "javascript"],
    extlink: "https://nbeauty.netlify.com",
    img: beauty,
    language: "HTML/CSS/JS",
    title: "beauty salon",
  },
  {
    id: 2,
    category: "javascript",
    filtering: "javascript",
    extlink: "https://gym50.netlify.com",
    img: gym,
    language: "HTML/CSS/JS",
    title: "gym",
  },
  {
    id: 3,
    category: "javascript",
    filtering: "javascript",
    extlink: "https://onlinecloth.netlify.com",
    img: onlinecloth,
    language: "javascript",
    title: "online shop",
  },
  {
    id: 4,
    category: "react",
    filtering: ["all", "react"],
    extlink: "https://hotelbeach.netlify.app",
    img: beach,
    language: "React js",
    title: "hotel resort",
  },
  {
    id: 5,
    category: "javascript",
    filtering: "javascript",
    extlink: "https://gigschool.netlify.app",
    img: school,
    language: "HTML/CSS/JS",
    title: "education",
  },
  {
    id: 6,
    category: "react",
    filtering: "react",
    extlink: "",
    img: porfolio,
    language: "React Js",
    title: "Portfolio",
  },
];
