import bg1 from "../assets/microsoft.png";
import bg2 from "../assets/google.jpeg";
import bg3 from "../assets/amazon.jpg";

const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Google",
    location: "Work From Home",
    duration: "3 Months",
    stipend: "₹15,000 /month",
    bgImage: bg2,
    skills: ["HTML", "CSS", "JavaScript", "React" , "Strong Problem Solving"] ,
    applyLink: "https://careers.google.com"
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "Microsoft",
    location: "Bangalore",
    duration: "6 Months",
    stipend: "₹20,000 /month",
    bgImage: bg1,
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"] ,
    applyLink: "https://careers.microsoft.com"
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "Amazon",
    location: "Hyderabad",
    duration: "4 Months",
    stipend: "₹18,000 /month",
    bgImage: bg3,
    skills: ["Python", "SQL", "Excel", "Power BI"] ,
    applyLink: "https://www.amazon.jobs"
  }
];

export default internships;
