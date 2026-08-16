import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-orange-500 dark:text-white">
              Portfolio
            </h3>

            <p
              className="text-sm"
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:text-white"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                color: darkMode ? "white" : "#374151",
              }}
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:text-white"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                color: darkMode ? "white" : "#374151",
              }}
            >
              <FaLinkedin />
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:text-white"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                color: darkMode ? "white" : "#374151",
              }}
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center md:text-right mt-6">
          <p
            className="text-sm flex items-center justify-center md:justify-end gap-1"
            style={{
              color: darkMode ? "#9ca3af" : "#6b7280",
            }}
          >
            © {currentYear} Made with <FaHeart className="text-red-500" /> by{" "}
            <span className="text-orange-500 ml-1">Kundan Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
