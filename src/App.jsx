import { Link } from "react-router-dom";
import "./App.css";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <>
      <main className=" w-full h-screen bg-abt-pattern bg-cover font-jose">
        <div className="lg:w-1/3 w-11/12 mx-auto">
          <div className="flex justify-center items-center h-screen ">
            <div>
              <div className="flex justify-center items-center">
                <img
                  src="/shuga-avatar.jpeg"
                  alt="shuga"
                  className="h-[100px] w-[100px] rounded-full"
                />
              </div>
              <div className="">
                <p className="my-4 text-center font-semibold text-lg">
                  Chiamaka Okeke
                </p>
                <p className="text-base text-center">
                  Want to know me? Connect with me via these links
                </p>
              </div>
              <div className="flex justify-center items-center">
                <ul className="flex gap-5 items-center mt-5">
                  <li>
                    <Link
                      to="https://www.linkedin.com/in/chiamakapriscaline/"
                      className="text-base font-normal"
                    >
                      <FaLinkedin className="text-3xl " />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base font-normal">
                      <FaXTwitter className="text-3xl" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="http://www.youtube.com/@PriscaDesigns"
                      className="text-base font-normal"
                    >
                      <FaYoutube className="text-3xl" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base bg-[#d2e0ef] font-normal"
                    >
                      <FaInstagram className="text-3xl" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <Link
                  to="https://www.linkedin.com/in/chiamakapriscaline/"
                  className="rounded-[30px]  bg-gray-200 shadow-md py-3 text-center"
                >
                  {" "}
                  Linkedin
                </Link>
                <Link
                  to="https://chiamaka-okeke.super.site/"
                  className="rounded-[30px] bg-gray-200 shadow-md py-3 text-center"
                >
                  {" "}
                  My Portfolio
                </Link>
                <Link
                  to="https://docs.google.com/document/d/1hBtALAexqR9LI5stb5Vv5VNFTOliPI3lQbyzp98B_6Q/edit?usp=drivesdk"
                  className="rounded-[30px] bg-gray-200 shadow-md py-3 text-center"
                >
                  {" "}
                  Resume
                </Link>
                <Link
                  to="https://dribbble.com/prissy"
                  className="rounded-[30px] bg-gray-200 shadow-md py-3 text-center"
                >
                  {" "}
                  Dribble
                </Link>
                {/* <Link className="rounded-[30px] bg-gray-200 shadow-md py-3 text-center">
                  {" "}
                  Behance
                </Link> */}
                <Link className="rounded-[30px] bg-gray-200 shadow-md py-3 text-center">
                  {" "}
                  Behance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
