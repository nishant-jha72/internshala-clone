import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react"; // Optional: Use icons for better UI

export default function InternshipSlide({
  title,
  company,
  location,
  duration,
  stipend,
  skills = [],
  bgImage,
  applyLink
}) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 bg-white">
      {/* Background Image Header */}
      <div 
        className="h-32 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark gradient for better text contrast if you want text ON the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent h-32" />
      </div>

      {/* Content Container */}
      <div className="relative p-5">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-slate-900 leading-tight">
              {title}
            </h2>
            <p className="text-sky-600 font-medium">{company}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span>📍</span> {location}
          </div>
          <div className="flex items-center gap-2">
            <span>⏳</span> {duration}
          </div>
          <div className="flex items-center gap-2">
            <span>💰</span> {stipend}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setShowSkills(!showSkills)}
            className="flex-1 flex items-center justify-center gap-1 border-2 border-slate-100 text-slate-700 font-semibold py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm"
          >
            Qualifications
            <ChevronDown className={`w-4 h-4 transition-transform ${showSkills ? "rotate-180" : ""}`} />
          </button>

          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-sky-600 text-white font-semibold py-2 rounded-lg hover:bg-sky-700 shadow-md shadow-sky-100 transition-all text-sm"
          >
            Apply Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Expandable Skills Section */}
        <div className={`overflow-hidden transition-all duration-300 ${showSkills ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Required Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-sky-50 text-sky-700 px-2.5 py-1 rounded-md text-xs font-medium border border-sky-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
