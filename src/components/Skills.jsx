import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import mongoDB from "../assets/mongoDB.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/expressJS.png";
import python from "../assets/python.png";
import node from "../assets/nodeJS.png";

const Skills = ({ darkMode }) => {
  const skills = [
    {
      name: "C",
      icon: c,
      level: 95,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "C++",
      icon: cpp,
      level: 90,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Python",
      icon: python,
      level: 75,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      level: 92,
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "mongoDB",
      icon: mongoDB,
      level: 88,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "expressJS",
      icon: express,
      level: 92,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "React",
      icon: react,
      level: 85,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "nodeJS",
      icon: node,
      level: 85,
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-14 relative overflow-hidden"
    >
      <div className="container px-5 py-14 mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1
            className="sm:text-4xl text-3xl font-bold mb-4"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
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
              Skills
            </span>
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#4b5563",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          sm:gap-6"
        >
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div
                style={{
                  background: darkMode
                    ? "linear-gradient(to bottom right, #1f2937, #111827)"
                    : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                  borderColor: darkMode ? "#374151" : "#e5e7eb",
                }}
                className="h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]"
              >
                {/* Icon + Name */}
                <div className="flex items-center mb-6">
                  <div
                    style={{
                      background: darkMode
                        ? "linear-gradient(to bottom right, #374151, #1f2937)"
                        : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                    }}
                    className="w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold ml-4"
                    style={{
                      color: darkMode ? "white" : "#1f2937",
                    }}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* Proficiency */}
                <div className="mb-2 flex justify-between items-center">
                  <span
                    className="font-medium"
                    style={{
                      color: darkMode ? "#d1d5db" : "#6b7280",
                    }}
                  >
                    Proficiency
                  </span>

                  <span
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                    className="font-bold"
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full h-3 rounded-full overflow-hidden"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                  }}
                >
                  <div
                    className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                {/* Bottom Line Animation */}
                <div
                  className={`mt-6 pt-4 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <div
                    className="h-1 rounded-full opacity-70 w-1/3 group-hover:w-full transition-all duration-500"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
