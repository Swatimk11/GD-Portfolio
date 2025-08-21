// ---------------- SKILLS SECTION LOGOS ----------------
import pythonLogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import phpLogo from './assets/tech_logo/php.jpg';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import powerbiLogo from './assets/tech_logo/powerbi.jpg';
import excelLogo from './assets/tech_logo/excel.jpg';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import awsLogo from './assets/tech_logo/aws.jpg';
import azureLogo from './assets/tech_logo/azure.jpg';

// ---------------- EXPERIENCE SECTION LOGOS ----------------
import solukraftLogo from './assets/company_logo/solukraft.jpg';
import jpmorganLogo from './assets/company_logo/jpmc.jpg';
import deloitteLogo from './assets/company_logo/deloitte.jpg';

// ---------------- EDUCATION SECTION LOGOS ----------------
import paceLogo from './assets/education_logo/pace.jpg';
import kleLogo from './assets/education_logo/kle.jpg';
import littleScholarLogo from './assets/education_logo/lsa.jpg';

// ---------------- PROJECT SECTION LOGOS ----------------
import blinkitLogo from './assets/work_logo/blinkit.png';
import aitravelLogo from './assets/work_logo/ai.png';
// import bookstoreLogo from './assets/work_logo/bookstore.png';
// import fraudLogo from './assets/work_logo/fraud.png';
import primeLogo from './assets/work_logo/prime.png';
import { href } from 'react-router-dom';




// ---------------- SKILLS ----------------
export const SkillsInfo = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React (Basic)', logo: reactjsLogo },
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Data Analytics',
    skills: [
      { name: 'Power BI', logo: powerbiLogo },
      { name: 'Excel', logo: excelLogo },
      { name: 'SQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'AWS (Basic)', logo: awsLogo },
      { name: 'Azure (Basic)', logo: azureLogo },
    ],
  },
];


// ---------------- EXPERIENCE ----------------
export const experiences = [
  {
    id: 0,
    img: solukraftLogo,
    role: "Web Design Intern",
    company: "Solukraft",
    date: "July 2024 – Dec 2024",
    desc: "Redesigned and optimized UI/UX for 5+ client websites, improving session duration by 40% and reducing bounce rate by 25%. Enhanced mobile responsiveness and ensured cross-browser compatibility, boosting mobile retention by 30%.",
    skills: [
      "UI/UX",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    id: 1,
    img: jpmorganLogo,
    role: "Virtual Intern",
    company: "JP Morgan Chase",
    date: "2024",
    desc: "Configured local dev environment and integrated 3 financial APIs, reducing setup time by 20% and enabling faster onboarding.",
    skills: [
      "API Integration",
      "JavaScript",
      "Dev Environment Setup",
    ],
  },
  {
    id: 2,
    img: deloitteLogo,
    role: "Data Analytics Virtual Intern",
    company: "Deloitte (Forage)",
    date: "July 2025",
    desc: "Analyzed datasets, detected anomalies, and provided actionable insights for client risk assessments. Developed data-driven solutions aligned with Deloitte’s professional practices.",
    skills: [
      "Data Analysis",
      "Risk Assessment",
      "Python",
      "Excel",
    ],
  },
];


// ---------------- EDUCATION ----------------
export const education = [
  {
    id: 1,
    degree: "B.E. in Computer Science Engineering",
    school: "P.A. College of Engineering, Mangalore",
    date: "2022 - 2026",
    grade: "CGPA: 9.31 / 10",
    desc: "Currently pursuing undergraduate studies in Computer Science Engineering with strong academic performance and active involvement in technical clubs and leadership roles.",
    img: paceLogo, // replace with actual logo/image path
  },
  {
    id: 2,
    degree: "P.U.C. in Science (PCMB)",
    school: "KLE Independent P.U. College, Belagavi",
    date: "2020 - 2022",
    grade: "Percentage: 77.88%",
    desc: "Completed Pre-University studies in Science with Physics, Chemistry, Mathematics, and Biology as core subjects, building a strong foundation for engineering.",
    img: kleLogo, // replace with actual logo/image path
  },
  {
    id: 3,
    degree: "S.S.L.C.",
    school: "Little Scholar Academy, Belagavi",
    date: "2019 - 2020",
    grade: "Percentage: 86.08%",
    desc: "Successfully completed secondary school education with distinction, excelling in academics and extracurricular activities.",
    img: littleScholarLogo, // replace with actual logo/image path
  },
];



// ---------------- PROJECTS ----------------
export const projects = [
  {
    id: 0,
    title: "BlinkIt Sales Insights Dashboard",
    description: "Built a Power BI dashboard analyzing 3 months of BlinkIt sales data, outlet performance, and customer satisfaction. Identified inventory inefficiencies across 10+ outlets, improving distribution by 25% and increasing regional sales by 15%.",
    image: blinkitLogo,
    tags: ["Power BI", "Excel", "Data Cleaning"],
    github: "https://github.com/Swatimk11/Data-Analyst/tree/main/Power%20bi",
    href: "/powerbi.pdf",

  },
  // {
  //   id: 1,
  //   title: "Online Book Store",
  //   description: "Developed a full-stack online bookstore with XAMPP, MySQL, and PHP, serving 100+ daily users. Features include dynamic product browsing, cart management, and secure order processing. Improved UX reduced cart abandonment by 20%.",
  //   image: bookstoreLogo,
  //   tags: ["XAMPP", "MySQL", "PHP"],
  //   github: "https://github.com/Swatimk11/Online-Book-Store",
  //   webapp: "",
  // },
  // {
  //   id: 2,
  //   title: "AI Fraud Detection System",
  //   description: "Created a fraud detection system using classification algorithms on 280K+ transactions, increasing model precision by 25% and reducing false positives from 18% to 12%.",
  //   image: fraudLogo,
  //   tags: ["Python", "Machine Learning", "Classification"],
  //   github: "https://github.com/Swatimk11/ai-fraud-detection",
  //   webapp: "",
  // },
  {
    id: 3,
    title: "AI Travel Planner",
    description: "Developed a smart AI-powered trip planner using BuildAI.space, integrating source-destination travel options and weather forecasting for personalized travel recommendations.",
    image: aitravelLogo,
    tags: ["AI", "React", "APIs"],
    github: "https://github.com/Swatimk11/ai-trip-planner",
    href: "https://travel-ly-ai-planner-2891c.buildaispace.app",

  },
  {
    id: 4,
    title: "Prime Video Analysis",
    description: "Analyzed Prime Video dataset for insights into content distribution, genre trends, and audience preferences using Python and Power BI.",
    image: primeLogo,
    tags: ["Python", "Power BI", "EDA"],
    github: "https://github.com/Swatimk11/Data-Analyst/tree/main/Power%20bi",
    href: "/powerbi.pdf",

  },
];
