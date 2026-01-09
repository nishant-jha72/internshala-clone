import InternshipSlide from "../components/InternshipSlide";

import bg1 from "../assets/google.jpeg";
import bg2 from "../assets/microsoft.png";
import bg3 from "../assets/amazon.jpg";

export default function Internships() {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 space-y-6">

        <InternshipSlide
          title="Frontend Developer Intern"
          company="Google"
          location="Work From Home"
          duration="3 Months"
          stipend="₹15,000 /month"
          skills={["HTML", "CSS", "JavaScript", "React"]}
          bgImage={bg1}
          applyLink="https://careers.google.com"
        />

        <InternshipSlide
          title="Backend Developer Intern"
          company="Microsoft"
          location="Bangalore"
          duration="6 Months"
          stipend="₹20,000 /month"
          skills={["Node.js", "Express", "MongoDB", "REST APIs"]}
          bgImage={bg2}
          applyLink="https://careers.microsoft.com"
        />

        <InternshipSlide
          title="Data Analyst Intern"
          company="Amazon"
          location="Hyderabad"
          duration="4 Months"
          stipend="₹18,000 /month"
          skills={["Python", "SQL", "Excel", "Power BI"]}
          bgImage={bg3}
          applyLink="https://www.amazon.jobs"
        />
      <InternshipSlide
          title="Data Analyst Intern"
          company="Google"
          location="Hyderabad"
          duration="6 Months"
          stipend="₹18,000 /month"
          skills={["Python", "SQL", "Excel", "Power BI"]}
          bgImage={bg1}
          applyLink="https://www.amazon.jobs"
        />
      </div>
    </section>
  );
}
