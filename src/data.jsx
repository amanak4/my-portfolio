import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaCode,
  FaDatabase,
  FaLink,
  FaReact,
} from 'react-icons/fa';
import { FiFileText, FiExternalLink, FiGithub } from 'react-icons/fi';

import Work1 from './assets/curry-g5ff3af663_1280.jpg';
import Work2 from './assets/proj1.png';
import Work3 from './assets/proj2.png';
import Work4 from './assets/Screenshot (176).png';
export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '#',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '#about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '#Portfolio',
  },


  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '#Contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name',
    description: ' : Aman',
  },

  {
    id: 2,
    title: 'Last Name',
    description: ' : Kasaudhan',
  },
   {
    id:3,
    title:'Birthday',
    description:' : 11 Jan 2004'
   },
  {
    id: 4,
    title: 'Age',
    description: ' : 20 Years',
  },

  {
    id: 5,
    title: 'Studying',
    description: ' : B.Tech. (Mech. Eng.)',
  },

  {
    id: 6,
    title: 'Address',
    description: ' : Ayodhya,UP',
  },

  {
    id: 7,
    title: 'Phone ',
    description: ' : 8471022320',
  },

  {
    id: 8,
    title: 'Email ',
    description: ': amankasaudhanak07@gmail.com',
  },

];





export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '60',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '82',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'MongoDB',
    percentage: '66',
  },

  {
    id: 5,
    title: 'PostgreSQL',
    percentage: '80',
  },

  {
    id: 6,
    title: 'React',
    percentage: '70',
  },

  {
    id: 7,
    title: 'C,C++',
    percentage: '75',
  },

  {
    id: 8,
    title: 'DSA',
    percentage: '15',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work4,
    title: 'Product-Catalog',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaLink />,
        title: 'WebLink : ',
        desc: 'https://productcatalog007.netlify.app/',
      },
      {
        icon: <FaReact />,
        title: 'Framework : ',
        desc: 'ReactJS',
      },
      {
        icon: <FiGithub />,
        title: 'Github link  : ',
        desc: 'https://github.com/amanak007/product-catalog',
      },
    ],
  },
  {
      id: 2,
      img: Work3,
      title: 'React Quiz',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FaLink />,
          title: 'WebLink : ',
          desc: 'https://65c769baa4e7cf5eb856c7aa--lovely-cheesecake-dfb885.netlify.app/',
        },
        {
          icon: <FaReact />,
          title: 'Framework : ',
          desc: 'ReactJS',
        },
        {
          icon: <FiGithub />,
          title: 'Github link  : ',
          desc: 'https://github.com/amanak007/react-quiz',
        },
      ],
    },
    {
      id: 3,
      img: Work1,
      title: 'Recipe Finder',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FaLink />,
          title: 'WebLink : ',
          desc: 'https://jhsa-1.onrender.com/',
        },
        {
          icon: <FaCode />,
          title: 'Languages & Database : ',
          desc: 'HTML,CSS,JS,MongoDb',
        },
        {
          icon: <FiGithub />,
          title: 'Github link  : ',
          desc: 'https://github.com/amanak007/recipes-finder',
        },
      ],
    },
    {
      id: 4,
      img: Work2,
      title: 'World Capital Quiz',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FaDatabase />,
          title: 'Database : ',
          desc: 'Postgre SQL',
        },
        {
          icon: <FaCode />,
          title: 'Languages : ',
          desc: 'HTML,CSS,JS',
        },
        {
          icon: <FiGithub />,
          title: 'Github link  : ',
          desc: 'https://github.com/amanak007/world-capital-quiz',
        },
      ],
    },
   
 
 
];
