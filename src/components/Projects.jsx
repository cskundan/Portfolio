import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "A responsive MERN stack e-commerce website with secure JWT authentication, product management, shopping cart, admin dashboard, and RESTful APIs for a seamless online shopping experience.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/cskundan",
      demo: "YOUR_ECOMMERCE_LIVE_URL",
    },
    {
      id: 2,
      title: "Build Website with AI in Seconds",
      desc: "An AI-powered website builder that generates responsive websites from user prompts, with real-time preview, customizable components, and a modern interface for fast and efficient website creation.",
      image: project2,
      tags: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
      github: "https://github.com/cskundan/WebBuild",
      demo: "https://webbuild-1-4xkt.onrender.com/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      desc: "A responsive portfolio website showcasing my projects, technical skills, certifications, and experience with a modern interface, smooth navigation, and mobile-friendly design for a professional online presence.",
      image: project3,
      tags: ["React", "EmailJS"],
      github: "https://github.com/cskundan/Portfolio",
      demo: "https://portfolio-f133.onrender.com/",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            A showcase of my recent work
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border duration-300 hover:border-orange-500/50 transition-all"
            >
              {/* Image */}
              <div className="h-44 sm:h-48 md:h-44 lg:h-48 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  {/* Code */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg transition-colors hover:opacity-90"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  {/* Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg text-white hover:shadow-lg transition-all"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="https://github.com/cskundan?tab=repositories"
            className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold rounded-full text-white hover:shadow-lg transition-all"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
