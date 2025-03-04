"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();

  const baseClassName = [
    "fixed top-0 w-full z-50 transition-colors duration-200 bg-opacity-95 py-4 lg:py-0",
  ];
  const [initClassName, setInitClassName] = useState([
    "[@media(min-width:1600px)]:bg-white [@media(min-width:1600px)]:text-black text-white",
  ]);

  const [buttonClassName, setButtonClassName] = useState([
    "px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center border border-white hover:bg-gray-200 hover:text-black [@media(min-width:1600px)]:border-black [@media(min-width:1600px)]:text-black [@media(min-width:1600px)]:hover:bg-gray-200 opacity-0 lg:opacity-100",
  ]);
  const buttonScrolledClassName = ["text-black bg-white"];
  const scrolledClassName = ["bg-black text-white"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [classNames, setClassNames] = useState({
    bg: [baseClassName, initClassName].join(" "),
    buttonBg: [buttonClassName].join(" "),
    hovered: false,
  });
  useEffect(() => {
    if (pathname === "/research") {
      setInitClassName([
        "[@media(min-width:1600px)]:bg-black [@media(min-width:1600px)]:text-white text-black",
      ]);
      setButtonClassName([
        "px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center border border-white hover:bg-gray-200 hover:text-black [@media(min-width:1600px)]:border-black [@media(min-width:1600px)]:text-black [@media(min-width:1600px)]:hover:bg-gray-200 opacity-0 lg:opacity-100 !text-black !bg-white",
      ]);
      setClassNames({
        hovered: false,
        bg: [
          baseClassName,
          [
            "[@media(min-width:1600px)]:bg-black [@media(min-width:1600px)]:text-white text-black",
          ],
        ].join(" "),
        buttonBg: [buttonClassName].join(" "),
      });
    } else {
      setInitClassName([
        "[@media(min-width:1600px)]:bg-white [@media(min-width:1600px)]:text-black text-white",
      ]);
      setButtonClassName([
        "px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center border border-white hover:bg-gray-200 hover:text-black [@media(min-width:1600px)]:border-black [@media(min-width:1600px)]:text-black [@media(min-width:1600px)]:hover:bg-gray-200 opacity-0 lg:opacity-100",
      ]);
      setClassNames({
        bg: [baseClassName, initClassName].join(" "),
        buttonBg: [buttonClassName].join(" "),
        hovered: false,
      });
    }
  }, [pathname]);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
        setIsScrolled(true);
        setClassNames({
          hovered: false,
          bg: [baseClassName, scrolledClassName].join(" "),
          buttonBg: [buttonClassName, buttonScrolledClassName].join(" "),
        });
      } else {
        setIsScrolled(false);
        setClassNames({
          hovered: false,
          bg: [baseClassName, initClassName].join(" "),
          buttonBg: [buttonClassName].join(" "),
        });
      }
    });
  });
  return (
    <>
      <header className={classNames.bg}>
        <div className="rw-container max-w-screen-large">
          <div className="flex items-center justify-between static z-10">
            <div className="lg:w-2/12 relative z-20">
              <Link
                className="hover:text-mediumGray translate-y-1 inline-flex relative items-center"
                href="/"
              >
                <span className="text-[2.25rem] font-black hover:text-slate-200">
                  ICONS
                </span>
              </Link>
            </div>
            <div>
              <nav
                onMouseOver={() =>
                  setClassNames({
                    hovered: true,
                    bg: [baseClassName, scrolledClassName].join(" "),
                    buttonBg: [buttonClassName, buttonScrolledClassName].join(
                      " "
                    ),
                  })
                }
                onMouseLeave={() =>
                  !isScrolled &&
                  setClassNames({
                    hovered: false,
                    bg: [baseClassName, initClassName].join(" "),
                    buttonBg: [buttonClassName].join(" "),
                  })
                }
              >
                <ul className="hidden lg:flex items-center justify-center relative z-20 cursor-pointer">
                  <li className="mb-5 pt-5 transition-all duration-200 false opacity-100 hover:opacity-60">
                    <Link className="rw-eyebrow px-4 py-2" href="/research">
                      Research
                    </Link>
                  </li>
                  <li className="mb-5 pt-5 transition-all duration-200 false opacity-100 hover:opacity-60">
                    <Link className="rw-eyebrow px-4 py-2" href="/product">
                      Product
                    </Link>
                  </li>
                  <li className="mb-5 pt-5 transition-all duration-200 false opacity-100 hover:opacity-60">
                    <Link className="rw-eyebrow px-4 py-2" href="/studios">
                      Studios
                    </Link>
                  </li>
                  <li className="mb-5 pt-5 transition-all duration-200 false opacity-100 hover:opacity-60">
                    <Link className="rw-eyebrow px-4 py-2" href="/about">
                      Company
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:w-2/12 flex justify-end items-center relative z-20">
              <Link className={classNames.buttonBg} target="_self" href="#">
                Get Started
              </Link>
              <div className="block lg:hidden ml-3 p-2">
                <svg
                  width="23"
                  height="9"
                  viewBox="0 0 23 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="23" height="1" className="fill-current"></rect>
                  <rect
                    y="4"
                    width="23"
                    height="1"
                    className="fill-current"
                  ></rect>
                  <rect
                    y="8"
                    width="23"
                    height="1"
                    className="fill-current"
                  ></rect>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
