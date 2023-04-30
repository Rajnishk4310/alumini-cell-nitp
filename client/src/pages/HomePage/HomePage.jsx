import "./HomePage.scss";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import homePageImg from "../../../public/images/homePageImg.jpg";
// import "tw-elements";
// import { Carousel, initTE, Ripple } from "tw-elements";
// initTE({ Ripple });
// initTE({ Carousel });
import { CiPaperplane } from "react-icons/ci";
import pic1 from "../../../public/images/pic1.jpg";
import pic2 from "../../../public/images/pic2.jpg";
import pic3 from "../../../public/images/pic3.jpg";
import pic4 from "../../../public/images/pic4.jpg";
import pic5 from "../../../public/images/pic5.jpg";
import pic6 from "../../../public/images/pic6.jpg";
import pic7 from "../../../public/images/pic7.jpg";
import pic8 from "../../../public/images/pic8.jpg";
import Newsletter from "../Newsletter/Newsletter";
// import director from "../../../public/images/PKJ_Desk Photo.jpg";

const HomePage = () => {
  document.title = "ALUMNI Cell NIT Patna | Home";

  return (
    <>
      <div className="pt-16 bg-black h-1/5">
        <div className="relative flex items-center justify-center w-full h-[100vh] overflow-hidden bg-black after:clear-both after:block after:content-['']">
          <div className="flex items-center justify-center h-full">
            {/* <video className="h-[100vh] w-full" autoPlay={true} loop={true} muted={true}>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/videos%2Felectric.mp4?alt=media&token=3aeb8b8b-5090-4c40-9087-188875adfe3b"
              src="https://rr4---sn-npoeens7.c.drive.google.com/videoplayback?expire=1681995462&ei=hv5AZJyIM5L1-LYP7O6UIA&ip=14.139.219.162&cp=QVRNU0pfVFRUQ1hPOlNSYXhHbTl6ekMyUENlWFgzNzVrTTNUc2RYNW9mTF9rSThUd29wb3RRYWg&id=d39054a6dde74da7&itag=18&source=webdrive&requiressl=yes&ttl=transient&susc=dr&driveid=1rIJqw4d0smyZSmOX_KYSf_i-R69RYqfM&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=34.690&lmt=1677048705431562&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgbxQRHiJOjOyIErnyNzp69b5pDH_Xjdt3j2j78OrHlJgCIHBy1xPphbQnzBvnDNMD4K5VIMdxHe0swCI87pLjoWU6&cpn=AVWJw3cOmBjBH39k&c=WEB_EMBEDDED_PLAYER&cver=1.20230416.00.00&rm=sn-cvhzy7s&req_id=313f7de4413736e2&ipbypass=yes&redirect_counter=2&cm2rm=sn-h55ld7s&cms_redirect=yes&cmsv=e&mh=MV&mip=111.235.68.130&mm=34&mn=sn-npoeens7&ms=ltu&mt=1681980769&mv=m&mvi=4&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJX6uf4wGaKjdBCKd588fDUvjdBAkYl4Az8rmQ7KXWK8AiABTaTJh10y458868zF..."
              type="video/mp4"
              className="h-[100vh] w-full"
            />
          </video> */}
            <div class="video-container">
              <video autoPlay={true} loop={true} muted={true}>
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/nitp-alumni-cell.appspot.com/o/videos%2FNITP%20Video.mp4?alt=media&token=29071eb1-2639-4781-8231-59c64b71f319"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute inset-x-[15%] flex flex-col gap-3 items-center justify-center py-20 text-center text-white">
              <h5 className="lg:text-4xl md:text-3xl text-2xl font-bold font-serif">
                Connect. Give. Cherish.
              </h5>
              <p className="lg:text-7xl md:text-6xl text-5xl font-bold font-serif">
                WELCOME BACK
              </p>
            </div>
          </div>
        </div>

        {/* News and Announcement section starts here */}
        <h1 className="mb-2.5 mt-10 text-5xl font-medium leading-tight">
          <span className="ml-5 text-center align-baseline lg:text-[0.95em] md:text-[0.75em] sm: text-[0.55em] font-bold leading-none text-primary-700 bg-black">
            News & Announcement
          </span>
        </h1>
        <div className="flex justify-evenly my-4">
          {/* <div className="bg-white flex justify-start max-w-[1600px] my-4   sm:grid sm:grid-col-3 md:grid-cols-3 lg:grid-cols-4  mx-auto"> */}
          <div className="px-5 sm:col-span-1 md:col-span-2 lg:col-span-3 bg-gray-700 rounded-[20px]">
            <div className="flex justify-between pb-2">
              {/* <h1 className="text-black text-3xl underline">News & Announcement</h1> */}
              <Link
                className="text-black text-3xl no-underline hover:no-underline"
                to="/news"
              >
                {" "}
                View All
              </Link>
            </div>

            <div className="py-8 overflow-y-auto max-h-[160px] sm:max-h-[150px] md:max-h-[290px] lg:max-h-[170px] overflow-hidden scrollbar-hidden">
              <div className="flex  ">
                <CiPaperplane />
                <p className="pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, fuga?Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Autem, nulla?{" "}
                </p>
              </div>
              <div className="flex">
                <CiPaperplane />
                <p className="pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, fuga?Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Dicta, odio?{" "}
                </p>
              </div>
              <div className="flex">
                <CiPaperplane />
                <p className="pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, fuga?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Minus, consectetur?{" "}
                </p>
              </div>
              <div className="flex">
                <CiPaperplane />
                <p className="pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, fuga?Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Saepe, optio!{" "}
                </p>
              </div>
              <div className="flex">
                <CiPaperplane />
                <p className="pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, fuga?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eum, at.{" "}
                </p>
              </div>
              <div className="flex">
                <CiPaperplane />
                <p className="pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, fuga?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Porro, commodi!{" "}
                </p>
              </div>
              <div className="flex">
                <CiPaperplane />
                <p className="pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, fuga?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Consectetur, facilis!{" "}
                </p>
              </div>
              <div className="flex">
                <CiPaperplane />
                <p className="pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, fuga?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Et, doloremque.{" "}
                </p>
              </div>
              <div className="flex">
                <CiPaperplane />
                <p className="pl-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, fuga?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sed, dolorem.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-[20px] sm:px-5 my-10 md:my-0  sm:col-span-2 md:col-span-1 lg:col-span-1   ">
            <div className="px-5">
              <h1 className="text-white text-3xl">Become a Member</h1>
              <hr className="max-w-[25%] " />
            </div>

            <div className="py-4 px-5">
              <p>
                Register now and become a member of Alumni Association of NIT
                Patna.
              </p>
            </div>
            <div className=" flex justify-center">
              <button
                className="bg-gray-700 px-4 py-2 mx-[5em] mb-7 text-white rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300 "
                type="button"
              >
                <Link to="/register" className="">
                  Register now
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* Director section starts here */}
        <h1 className="mb-2.5 mt-10 text-5xl font-medium leading-tight">
          <span className="ml-5 text-center align-baseline lg:text-[0.95em] md:text-[0.75em] sm: text-[0.55em] font-bold leading-none text-primary-700 bg-black">
            From Director's Desk
          </span>
        </h1>
        <div className="grid bg-gray-700 text-white p-20  gap-6 text-center md:grid-cols-3 lg:gap-12">
          <div className="mb-12 md:mb-0">
            {/* <h1 className="mb-4 text-5xl font-semibold text-center md:text-left">
                  From Director's Desk
                </h1> */}
            <h5 className="mb-4 text-3xl font-semibold text-center md:text-left">
              Prof. P. K. Jain
            </h5>
            <ul className="text-center md:text-left">
              <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                Director of NIT Patna
              </h6>

              <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                Prof. Pradip K. Jain joined as a Lecturer of Electronics
                Engineering at Institute of Technology, Banaras Hindu University
                in 1981, and became Professor in the Year 2001. He has made
                significant contribution in the areas of analysis, modeling and
                development of high power microwave tubes and gyrotron devices.
              </h6>
            </ul>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="mb-12 flex justify-center ">
              <img
                src="https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg"
                // src={director}
                className="w-96 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
          </div>
          <div className="mb-12 md:mb-0">
            <p className="mb-4 text-2xl text-center md:text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Alumni, corporates and philanthropists have been generously
              contributing towards the development of NIT Patna. The Institute,
              through the DEAN ACR’s office, inspires and invites these varied
              groups to continue supporting the aspirations of NIT Patna - an
              “Institute of Eminence.” We commit to using our donors’ endowments
              with integrity towards enhancing the welfare of our students and
              faculty.
            </p>
            <a
              // href="https://drive.google.com/file/d/1Z4t3povLq2PqdWXaGeJ2g55ge9PbG_Jy/view?sz=w320"
            >
              <button
                type="button"
                className="inline-block rounded bg-gray-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-400"
              >
                READ MORE
              </button>
            </a>
          </div>
        </div>

        {/* Gallery section starts here */}
        <div>
          <div>
            <h1 className="mb-2.5 mt-10 text-5xl font-medium leading-tight">
              <span className="ml-5 text-center align-baseline lg:text-[0.95em] md:text-[0.75em] sm: text-[0.55em] font-bold leading-none text-primary-700 bg-black">
                Gallery
              </span>
            </h1>
          </div>
          <div class="  columns-4  sm:columns-8 mx-3 mt-4 gap-5 bg-black  ">
            <div className="columns-1 ">
              <div className="overflow-hidden  ">
                <img
                  class="border-black rounded-3xl max-w-full h-auto aspect-square hover:scale-125 duration-500 p-2 "
                  src={pic2}
                />
              </div>
              <div className="my-6 overflow-hidden  ">
                <img
                  class="border-black rounded-3xl w-full h-auto aspect-square hover:scale-125 duration-500 p-2  "
                  src={pic1}
                />
              </div>
              <div className="my-6 overflow-hidden ">
                <img
                  class="border-black rounded-3xl w-full  aspect-square p-2 hover:scale-125 duration-500 "
                  src={pic3}
                />
              </div>
              <div className="my-6 overflow-hidden ">
                <img
                  class="border-black rounded-3xl w-full aspect-square p-2 hover:scale-125 duration-500 "
                  src={pic8}
                />
              </div>
              <div className="my-6 overflow-hidden ">
                <img
                  class="border-black rounded-3xl w-full aspect-square p-2 hover:scale-125 duration-500 "
                  src={pic5}
                />
              </div>
              <div className="my-6  overflow-hidden">
                <img
                  class="border-black rounded-3xl w-full aspect-square p-2 hover:scale-125 duration-500 "
                  src={pic7}
                />
              </div>
              <div className="my-6  overflow-hidden ">
                <img
                  class="border-black rounded-3xl max-w-full aspect-square p-2 hover:scale-125 duration-500 "
                  src={pic4}
                />
              </div>
              <div className=" aspect-square sm:my-6 p-2 max-w-full h-auto flex align-center   ">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="  bg-gray-700 border border-black rounded-3xl px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <a
                    className=" text-xs sm:text-lg text-white hover:font-bold"
                    href="/gallery"
                  >
                    See More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
