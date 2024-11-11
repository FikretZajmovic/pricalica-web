import React from "react";
import Pricalica from "./images/busy book 1.png";
import PricalicaScreen from "./images/pricalica home screen.png";
import UserIcon from "./images/user-icon.png";
import BackgroundImage from "./images/background.png";
import Logo from "./images/dino logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { SiTiktok } from "react-icons/si";
import Dino from "./images/dino.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <img src={Logo} alt="Logo" className="h-8 md:h-10" />
        <nav className="hidden md:flex space-x-6 ml-10">
          <a
            href="#"
            className="font-semibold text-[#FFBD59] text-lg md:text-xl font-afacad"
          >
            Početna
          </a>
          <a href="#" className="text-lg md:text-xl font-afacad">
            Proizvodi
          </a>
          <a href="#" className="text-lg md:text-xl font-afacad">
            Kontaktiraj nas
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 border rounded-full text-[#FFBD59] border-[#FFBD59] hidden md:inline-block text-lg md:text-xl font-afacad">
            Registracija
          </button>
          <button className="px-4 py-2 text-white rounded-full bg-[#FFBD59] text-lg md:text-xl font-afacad">
            Prijava
          </button>
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="focus:outline-none text-[#FFBD59]"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {showMenu && (
        <div className="flex flex-col space-y-4 mt-4 p-4 bg-white shadow-md md:hidden">
          <a href="#" className="font-afacad text-[#FFBD59]">
            Početna
          </a>
          <a href="#" className="font-afacad">
            Proizvodi
          </a>
          <a href="#" className="font-afacad">
            Kontaktiraj nas
          </a>
          <button className="px-4 py-2 border rounded-full text-[#FFBD59] border-[#FFBD59] font-afacad">
            Registracija
          </button>
        </div>
      )}

      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-white text-xl md:text-3xl mb-2 font-afacad">
                UČENJE KOJE DJECA VOLE!
              </p>
              <h1 className="text-[#FFF6C5] text-5xl md:text-8xl font-afacad font-bold mb-4">
                EDUDINO
              </h1>
              <p className="text-white text-lg md:text-3xl mb-8 font-afacad">
                Zabavno i edukativno mjesto gdje djeca kroz igru uče i razvijaju
                maštu.
              </p>
              <button className="bg-[#FFBD59] text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-2xl font-afacad">
                Istraži naše proizvode
              </button>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={Dino}
                alt="Edudino mascot"
                className="w-100 md:w-128 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-10 md:py-16 px-4">
        <h2 className="text-4xl md:text-8xl font-bold mb-10 md:mb-16 text-center text-[#FFBD59] font-afacad">
          PROIZVODI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 bg-[#629F51] rounded-tl-[24px] rounded-br-[24px] rounded-tr-[164px] rounded-bl-[164px] transform -rotate-2"
              style={{ width: "100%", height: "80%", top: "30%" }}
            ></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full py-12">
              <img
                src={Pricalica}
                alt="PRIČALICA"
                className="w-48 md:w-72 h-auto"
              />
              <a
                href="#busy-book"
                className="absolute -bottom-8 w-12 md:w-16 h-12 md:h-16 bg-[#FFBD59] rounded-full flex items-center justify-center translate-y-1/2"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 bg-[#629F51] rounded-tr-[24px] rounded-bl-[24px] rounded-tl-[164px] rounded-br-[164px] transform rotate-2"
              style={{ width: "100%", height: "80%", top: "30%" }}
            ></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full py-12">
              <img
                src={PricalicaScreen}
                alt="App Preview"
                className="w-100 md:w-[30rem] h-auto"
              />
              <a
                href="#app"
                className="absolute -bottom-8 w-12 md:w-16 h-12 md:h-16 bg-[#FFBD59] rounded-full flex items-center justify-center translate-y-1/2"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 py-10 md:py-16 px-4">
        <div className="bg-[#629F51] rounded-lg p-6 md:p-8 w-full max-w-md md:max-w-lg">
          <h3 className="text-white text-center text-base md:text-xl mb-4 md:mb-6 font-afacad">
            Želiš postati tester naših aplikacija?
          </h3>
          <input
            type="email"
            placeholder="@ Email"
            className="w-full px-4 py-2 md:py-3 rounded-lg border border-gray-200 text-gray-600 placeholder-gray-400 mb-4"
          />
          <button className="w-full bg-[#FFBD59] text-white py-2 md:py-3 rounded-lg text-lg font-afacad">
            Pošalji
          </button>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg p-8 md:p-10 w-full max-w-2xl">
          <button className="absolute -left-5 sm:-left-10 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-gray-200 shadow-md hover:bg-gray-300">
            <ChevronLeft className="text-gray-600" />
          </button>

          <div className="flex items-start space-x-6">
            <img
              src={UserIcon}
              alt="User"
              className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-[#E6F3F5]"
            />
            <div>
              <h3 className="text-2xl font-semibold font-afacad">
                Sead Mašetić
              </h3>
              <p className="text-xl text-gray-500 font-afacad">IT Student</p>
              <p className="text-gray-600 leading-relaxed mt-4 text-lg font-afacad">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>

          <div className="mt-1 ml-2 flex text-yellow-400">{"★".repeat(5)}</div>

          <button className="absolute -right-5 sm:-right-10 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-gray-200 shadow-md hover:bg-gray-300">
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
      </section>

      <footer
        className="text-white p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        style={{ backgroundColor: "#FFBD59" }}
      >
        <div className="flex items-center space-x-2">
          <MailIcon
            style={{
              color: "white",
              fontSize: "24px",
              fontFamily: "sans-serif",
              font: "Afacad",
            }}
          />
          <p>pricalica.ba@gmail.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Instagram">
            <InstagramIcon style={{ color: "white", fontSize: "24px" }} />
          </a>
          <a href="#" aria-label="Facebook">
            <FacebookIcon style={{ color: "white", fontSize: "24px" }} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkedInIcon style={{ color: "white", fontSize: "24px" }} />
          </a>
          <a href="#" aria-label="TikTok">
            <SiTiktok style={{ color: "white", fontSize: "24px" }} />
          </a>
        </div>
        <img src={Logo} alt="Logo" className="h-12" />
      </footer>
    </div>
  );
}
