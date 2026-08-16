import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import hero from "../assets/hero.png";
import hi from "../assets/hi.png";
import CV from "../assets/cv.pdf";
import { DownloadIcon, Mail } from "lucide-react";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    {
      icon: email,
      alt: "Email",
      link: "mailto:kundanaaa2002@gmail.com",
    },
    {
      icon: github,
      alt: "GitHub",
      link: "https://github.com/cskundan",
    },
    {
      icon: linkedin,
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/cskd32",
    },
    {
      icon: instagram,
      alt: "Instagram",
      link: "https://www.instagram.com/your-instagram-username/",
    },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-orange-500 hover:bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
    decorativeCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="z-10"
      >
        <div
          className="
          container mx-auto
          px-4 sm:px-6 md:px-8 lg:px-14
          pt-28 sm:pt-32 lg:pt-36
          pb-12 sm:pb-16 lg:pb-24
          flex flex-col lg:flex-row
          items-center justify-between
          gap-10 lg:gap-16"
        >
          {/* LEFT CONTENT */}
          <div
            className="
            w-full lg:w-1/2
            flex flex-col
            items-center lg:items-start
            text-center lg:text-left"
          >
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target={social.alt === "Email" ? "_self" : "_blank"}
                  rel={
                    social.alt === "Email" ? undefined : "noopener noreferrer"
                  }
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? "" : "filter brightness-75"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Title */}
            <h1
              className={`
              ${theme.textPrimary}
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-bold
              leading-tight
              mb-4`}
            >
              Hi, I'm KUNDAN
            </h1>

            {/* Description */}
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              A Full Stack Developer passionate about building modern web
              applications.
              <br />
              MCA Student | AKTU 💻 MERN Stack Developer
              <br />
              Strong in DSA & Problem Solving I create responsive,
              user-friendly, and scalable web solutions.
            </p>

            {/* Buttons */}
            <div
              className="w-full pt-4 sm:pt-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                {/* Download CV */}
                <a href={CV} download className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]">
                    <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download CV
                  </button>
                </a>

                {/* Contact */}
                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center justify-center border-0 py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ${theme.buttonSecondary}`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden">
                <img
                  src={hero}
                  alt="Hero"
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Hi Icon */}
              <img
                src={hi}
                alt="Hi"
                className="absolute -top-4 left-6 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10"
              />
            </div>
          </div>
        </div>
        {/* Decorative Circle */}
        <div
          className={`absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse hidden sm:block ${theme.decorativeCircle}`}
        ></div>
      </section>
    </div>
  );
};

export default Hero;
