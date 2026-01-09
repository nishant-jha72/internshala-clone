import { useState } from "react";

export default function InternshipSlide({
  title,
  company,
  location,
  duration,
  stipend,
  skills,
  bgImage,
  applyLink
}) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="bg-white/50 p-5">
        <h2 className="text-lg font-semibold text-black">
          {title}
        </h2>

        <p className="text-black">{company}</p>

        <div className="text-sm text-black mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
          <p>📍 {location}</p>
          <p>⏳ {duration}</p>
          <p>💰 {stipend}</p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => setShowSkills(!showSkills)}
            className="border border-sky-500 text-sky-500 px-3 py-1.5 rounded hover:bg-sky-50 transition"
          >
            Required Qualification
          </button>

          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-sky-600 px-4 py-2 rounded hover:bg-sky-600 transition inline-block"
          >
            Apply Now
          </a>
        </div>

        {/* Skills */}
        {showSkills && (
          <div className="mt-4 bg-gray-100 p-3 rounded">
            <p className="font-medium text-gray-700 mb-2">
              Required Skills:
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
