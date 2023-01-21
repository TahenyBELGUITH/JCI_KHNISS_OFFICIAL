//  icons
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import {
  BsFillFileTextFill,
  BsCalendarEvent,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";
import { FaUsers, FaQuestion } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";

import pic1 from "../Images/Intro/1.jpg";
import pic2 from "../Images/Intro/2.jpg";
import pic3 from "../Images/Intro/3.jpg";
import pic4 from "../Images/Intro/4.jpg";
import pic5 from "../Images/Intro/5.jpg";
import pic6 from "../Images/Intro/6.jpg";
import pic7 from "../Images/Intro/7.jpg";
import pic8 from "../Images/Intro/8.jpg";
import pic9 from "../Images/Intro/9.jpg";
import pic10 from "../Images/Intro/10.jpg";
import pic11 from "../Images/Intro/11.jpg";
import pic12 from "../Images/Intro/12.jpg";

import Abdelhamid from "../Images/Office/abdelhamid.png";
import Abdellatif from "../Images/Office/abdellatif.png";
import Chourouk from "../Images/Office/chourouk.jpeg";
import Saif from "../Images/Office/saif.jpg";
import Chedly from "../Images/Office/Chedly.jpeg";
import Salouha from "../Images/Office/Salouha.jpg";
import Altaf from "../Images/Office/altaf.jpeg";
import Taheny from "../Images/Office/b-taheny.jpg";
import Nawress from "../Images/Office/naoures.png";
import Salma from "../Images/Office/salma.jpg";
import Rabii from "../Images/Office/rabiie.jpg";
import Hamza from "../Images/Office/hamza.jpg";
import Amine from "../Images/Office/amine.jpg";
import Habib from "../Images/Office/habib.jpg";
import Siwar from "../Images/Office/siwar.jpg";
import Sirine from "../Images/Office/sirine.jpg";
import Ahlem from "../Images/Office/ahlem.jpg";
import Karim from "../Images/Office/karim.jpg";
import Achraf from "../Images/Office/achraf.jpg";

// navigation
export const navTable = [
  {
    id: 1,
    href: "#home",
    name: <HiHome />,
  },
  {
    id: 2,
    href: "#creed",
    name: <BsFillFileTextFill />,
  },
  {
    id: 3,
    href: "#office",
    name: <FaUsers />,
  },
  {
    id: 4,
    href: "#event",
    // page FB
    name: <BsCalendarEvent />,
  },
  {
    id: 5,
    href: "#faq",
    // page FB
    name: <FaQuestion />,
  },
  {
    id: 6,
    href: "#add",
    name: <AiOutlineUserAdd />,
  },
  {
    id: 7,
    href: "#contact",
    name: <BsFillTelephoneForwardFill />,
  },
];

// social
export const social = [
  {
    icon: <CgMail />,
    href: "https://twitter.com/BelguithTaheny",
  },
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/JCI-Khniss-318957112019536",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/belguith_tahenyy/",
  },
];

// intro

export const introTable = [
  {
    id: 0,
    src: pic1,
    for: "slide1",
  },
  {
    id: 1,
    src: pic2,
    for: "slide2",
  },
  {
    id: 2,
    src: pic3,
    for: "slide3",
  },
  {
    id: 3,
    src: pic4,
    for: "slide4",
  },
  {
    id: 4,
    src: pic5,
    for: "slide5",
  },
  {
    id: 5,
    src: pic6,
    for: "slide6",
  },
  {
    id: 6,
    src: pic7,
    for: "slide7",
  },
  {
    id: 7,
    src: pic8,
    for: "slide8",
  },
  {
    id: 8,
    src: pic9,
    for: "slide9",
  },
  {
    id: 9,
    src: pic10,
    for: "slide10",
  },
  {
    id: 10,
    src: pic11,
    for: "slide11",
  },
  {
    id: 11,
    src: pic12,
    for: "slide12",
  },
];

// cardTable

export const cardTable = [
  {
    id: 0,
    number: "01",
    question: "What is JCI's mission?",
    answer:
      "To provide development opportunities that empower young people to create positive change",
    href: "https://jci.cc/about",
  },
  {
    id: 1,
    number: "02",
    question: "What is JCI's vision?",
    answer: "To be the leading global network of young active citizens",
    href: "",
  },
  {
    id: 2,
    number: "03",
    question: "What is JCI membership?",
    answer:
      "JCI is a nonprofit organization of young active citizens age 18 to 40 who are engaged and committed to creating impact in their communities",
    href: "",
  },
  {
    id: 3,
    number: "04",
    question: "What are the benefits of joining JCI?",
    answer: "You'll broaden your network of contacts ...",
    href: "",
  },
  {
    id: 4,
    number: "05",
    question: "Who can join JCI in Khniss ?",
    answer:
      "The membership is offered to everybody regardless of color, cast and creed between the age of 18 -40 years.",
    href: "",
  },
  {
    id: 5,
    number: "06",
    question: "How much is JCI membership?",
    answer: "Our joining and annual fee is 50 TDN/Annual.",
    href: "",
  },
];

// Office
export const officeTable = [
  {
    id: 0,
    name: "Abdelhamid SAKLY",
    src: Abdelhamid,
    post: "President",
    href: "https://www.facebook.com/abdelhamid.sakly.75",
    year: "2023",
  },
  {
    id: 1,
    name: "Abdellatif KRAIEM",
    src: Abdellatif,
    post: "P.President",
    href: "https://www.facebook.com/abdellatif.kraiem1",
    year: "2023",
  },
  {
    id: 2,
    name: "Chourouk BOUSSAID",
    src: Chourouk,
    post: "VPDF",
    href: "https://www.facebook.com/bousaid.chourouk",
    year: "2023",
  },
  {
    id: 3,
    name: "Saif TRIMECH",
    src: Saif,
    post: "VPPRE",
    href: "https://www.facebook.com/majhouls.trimech.9",
    year: "2023",
  },
  {
    id: 4,
    name: "Chedly TRIMECH",
    src: Chedly,
    post: "Treasurer",
    href: "https://www.facebook.com/Trimakus.Chedly",
    year: "2023",
  },
  {
    id: 5,
    name: "Salouha TAOUESS",
    src: Salouha,
    post: "G.secretary",
    href: "https://www.facebook.com/sasou.salouha.1",
    year: "2023",
  },
  {
    id: 6,
    name: "Altaf MISSAOUI",
    src: Altaf,
    post: "Jural advisor",
    href: "https://www.facebook.com/miss.altafallah",
    year: "2023",
  },

  {
    id: 0,
    name: "Abdellatif KRAIEM",
    src: Abdellatif,
    post: "President",
    href: "https://www.facebook.com/abdellatif.kraiem1",
    year: "2022",
  },
  {
    id: 1,
    name: "Nawress KRAIEM",
    src: Nawress,
    post: "P.President",
    href: "https://www.facebook.com/naouress.kraiem",
    year: "2022",
  },
  {
    id: 2,
    name: "Taheny BELGUITH",
    src: Taheny,
    post: "VPDF",
    href: "https://www.facebook.com/taheni.belguith.71",
    year: "2022",
  },
  {
    id: 3,
    name: "Abdelhamid SAKLY",
    src: Abdelhamid,
    post: "VPPRE",
    href: "https://www.facebook.com/abdelhamid.sakly",
    year: "2022",
  },
  {
    id: 4,
    name: "Salma JELASSI",
    src: Salma,
    post: "Treasurer",
    href: "https://www.facebook.com/salma.jls",
    year: "2022",
  },
  {
    id: 5,
    name: "Chourouk BOUSSAID",
    src: Chourouk,
    post: "G.secretary",
    href: "https://www.facebook.com/chourouk.bsd",
    year: "2022",
  },
  {
    id: 5,
    name: "Rabii KRAIEM",
    src: Rabii,
    post: "Jural advisor",
    href: "https://www.facebook.com/rabii.kraiem.31",
    year: "2022",
  },
  {
    id: 0,
    name: "Nawress KRAIEM",
    src: Nawress,
    post: "President",
    href: "https://www.facebook.com/naouress.kraiem",
    year: "2021",
  },
  {
    id: 1,
    name: "Hamza TRIMECH",
    src: Hamza,
    post: "P.President",
    href: "https://www.facebook.com/profile.php?id=100006194268779",
    year: "2021",
  },
  {
    id: 2,
    name: "Med.Amine BOUSSAID",
    src: Amine,
    post: "VPDF",
    href: "https://www.facebook.com/med.amine.bsd",
    year: "2021",
  },
  {
    id: 3,
    name: "Abdellatif KRAIEM",
    src: Abdellatif,
    post: "VPPRE",
    href: "https://www.facebook.com/abdellatif.kraiem1",
    year: "2021",
  },
  {
    id: 4,
    name: "Habib B.AFIA",
    src: Habib,
    post: "Treasurer",
    href: "https://www.facebook.com/profile.php?id=100009280604200",
    year: "2021",
  },
  {
    id: 5,
    name: "Siwar TRIMECH",
    src: Siwar,
    post: "G.secretary",
    href: "https://www.facebook.com/siwar.trimech",
    year: "2021",
  },
  {
    id: 5,
    name: "Sirine MABROUK",
    src: Sirine,
    post: "Jural advisor",
    href: "https://www.facebook.com/syrine.sarouna.39",
    year: "2021",
  },
  {
    id: 0,
    name: "Hamza TRIMECH",
    src: Hamza,
    post: "President",
    href: "https://www.facebook.com/profile.php?id=100006194268779",
    year: "2020",
  },
  {
    id: 1,
    name: "Ahlem HADDAD",
    src: Ahlem,
    post: "P.President",
    href: "https://www.facebook.com/ahlem.hadded.102",
    year: "2020",
  },
  {
    id: 2,
    name: "Nawress KRAIEM",
    src: Nawress,
    post: "VPDF",
    href: "https://www.facebook.com/naouress.kraiem",
    year: "2020",
  },
  {
    id: 3,
    name: "Saif TRIMECH",
    src: Saif,
    post: "VPPRE",
    href: "https://www.facebook.com/majhouls.trimech.9",
    year: "2020",
  },
  {
    id: 4,
    name: "Habib B.AFIA",
    src: Habib,
    post: "Treasurer",
    href: "https://www.facebook.com/profile.php?id=100009280604200",
    year: "2020",
  },
  {
    id: 5,
    name: "Taheny BELGUITH",
    src: Taheny,
    post: "G.secretary",
    href: "https://www.facebook.com/taheni.belguith.71",
    year: "2020",
  },
  {
    id: 5,
    name: "Siwar Trimech",
    src: Siwar,
    post: "Jural advisor",
    href: "https://www.facebook.com/siwar.trimech",
    year: "2020",
  },
  {
    id: 0,
    name: "Ahlem HADDAD",
    src: Ahlem,
    post: "President",
    href: "https://www.facebook.com/ahlem.hadded.102",
    year: "2019",
  },
  {
    id: 1,
    name: "S.Karim SAKLY",
    src: Karim,
    post: "P.President",
    href: "https://www.facebook.com/karim.jci",
    year: "2019",
  },
  {
    id: 2,
    name: "Achraf BOUGHAMOURA",
    src: Achraf,
    post: "VPDF",
    href: "https://www.facebook.com/boughamouraachraf",
    year: "2019",
  },
  {
    id: 3,
    name: "Hamza TRIMECH",
    src: Hamza,
    post: "VPPRE",
    href: "https://www.facebook.com/profile.php?id=100006194268779",
    year: "2019",
  },
  {
    id: 4,
    name: "Abdellatif KRAIEM",
    src: Abdellatif,
    post: "Treasurer",
    href: "https://www.facebook.com/abdellatif.kraiem1",
    year: "2019",
  },
  {
    id: 5,
    name: "Nawress KRAIEM",
    src: Nawress,
    post: "G.secretary",
    href: "https://www.facebook.com/naouress.kraiem",
    year: "2019",
  },
  {
    id: 5,
    name: "Taheny BELGUITH",
    src: Taheny,
    post: "Jural advisor",
    href: "https://www.facebook.com/taheni.belguith.71",
    year: "2019",
  },
];

export const officeYearTable = [
  {
    id: 0,
    mondat: "2019",
  },
  {
    id: 0,
    mondat: "2020",
  },
  {
    id: 0,
    mondat: "2021",
  },
  {
    id: 0,
    mondat: "2022",
  },
  {
    id: 0,
    mondat: "2023",
  },
];
