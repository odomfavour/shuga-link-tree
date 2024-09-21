import { Link } from "react-router-dom";
import "./App.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <>
      <main className="bg-[#ccc] w-full h-screen">
        <div className="w-1/3 mx-auto">
          <div className="flex justify-center items-center h-screen">
            <div>
              <div className="flex justify-center items-center">
                <img
                  src="/shuga-avatar.jpeg"
                  alt="shuga"
                  className="h-[100px] w-[100px] rounded-full"
                />
              </div>
              <p className="my-4 text-center font-semibold text-lg">
                Chiamaka Okeke
              </p>
              <p className="text-base text-center">
                Want to know me? Connect with me via these links
              </p>
              <div className="flex justify-center items-center">
                <ul className="flex gap-5 items-center mt-5">
                  <li>
                    <Link to="#" className="text-base font-normal">
                      <FaFacebook className="text-3xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base font-normal">
                      <FaInstagram className="text-3xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base font-normal">
                      <FaLinkedin className="text-3xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base font-normal">
                      <FaXTwitter className="text-3xl" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <Link className="rounded-[30px] bg-white py-3 text-center">
                  {" "}
                  Behance
                </Link>
                <Link className="rounded-[30px] bg-white py-3 text-center">
                  {" "}
                  Behance
                </Link>
                <Link className="rounded-[30px] bg-white py-3 text-center">
                  {" "}
                  Behance
                </Link>
                <Link className="rounded-[30px] bg-white py-3 text-center">
                  {" "}
                  Behance
                </Link>
                <Link className="rounded-[30px] bg-white py-3 text-center">
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
