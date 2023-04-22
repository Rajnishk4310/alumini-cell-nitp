import "./HomePage.scss";
import { useRef, useEffect } from "react";
import { Carousel, initTE, Ripple } from "tw-elements";

const HomePage = () => {
  document.title = "ALUMNI Cell NIT Patna | Home";
  initTE({ Carousel, Ripple });

  return (
    <div className="pt-16 bg-black h-1/5">
      <div
        id="carouselExampleCaptions"
        className="relative "
      >
        <div className="relative embed-responsive-4by3 w-full  after:clear-both after:block after:content-['']">
          <video className="w-full" autoPlay loop muted>
            <source
              src="https://rr4---sn-npoeens7.c.drive.google.com/videoplayback?expire=1681995462&ei=hv5AZJyIM5L1-LYP7O6UIA&ip=14.139.219.162&cp=QVRNU0pfVFRUQ1hPOlNSYXhHbTl6ekMyUENlWFgzNzVrTTNUc2RYNW9mTF9rSThUd29wb3RRYWg&id=d39054a6dde74da7&itag=18&source=webdrive&requiressl=yes&ttl=transient&susc=dr&driveid=1rIJqw4d0smyZSmOX_KYSf_i-R69RYqfM&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=34.690&lmt=1677048705431562&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgbxQRHiJOjOyIErnyNzp69b5pDH_Xjdt3j2j78OrHlJgCIHBy1xPphbQnzBvnDNMD4K5VIMdxHe0swCI87pLjoWU6&cpn=AVWJw3cOmBjBH39k&c=WEB_EMBEDDED_PLAYER&cver=1.20230416.00.00&rm=sn-cvhzy7s&req_id=313f7de4413736e2&ipbypass=yes&redirect_counter=2&cm2rm=sn-h55ld7s&cms_redirect=yes&cmsv=e&mh=MV&mip=111.235.68.130&mm=34&mn=sn-npoeens7&ms=ltu&mt=1681980769&mv=m&mvi=4&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJX6uf4wGaKjdBCKd588fDUvjdBAkYl4Az8rmQ7KXWK8AiABTaTJh10y458868zF..."
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-x-[15%] bottom-96 hidden py-20 text-center text-white md:block">
            <h5 className="text-4xl font-bold font-serif">
              Connect. Give. Cherish.
            </h5>
            <p className="text-7xl font-bold font-serif">WELCOME BACK</p>
          </div>
        </div>
      </div>

      <div className="grid bg-white text-black p-20  gap-6 text-center md:grid-cols-3 lg:gap-12">
        <div className="mb-12 md:mb-0">
          <h1 className="mb-4 text-5xl font-semibold text-center md:text-left">
            From Director's Desk
          </h1>
          <h5 className="mb-4 text-2xl font-semibold text-center md:text-left">
            Prof. P. K. Jain
          </h5>
          <ul className="text-center md:text-left">
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Director of NIT Patna
            </h6>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Institute AI & ML Chair Professor
            </h6>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Dean – Alumni and Corporate
            </h6>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Relations
            </h6>
          </ul>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-12 flex justify-center ">
            <img
              src="https://raw.githubusercontent.com/Rajnishk4310/HealthXoxo/main/images/PKJ_Desk%20Photo.jpg"
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
          <button
            type="button"
            className="inline-block rounded bg-sky-950 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <a className=" decoration-white" href="https://drive.google.com/file/d/1Z4t3povLq2PqdWXaGeJ2g55ge9PbG_Jy/view?sz=w320">READ MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
