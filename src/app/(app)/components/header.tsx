import Image from "next/image";

export default function Header() {
  return (
    <header className="px-[32px] shrink-0 flex bg-center justify-between gap-[10px] py-0 h-[56px] bg-black items-center">
      <button className="cursor-pointer border-none bg-transparent p-0 h-[32px] w-[32px] shrink-0 hidden [@media(max-width:768px)]:block">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            cursor="default"
          >
            <path
              fill="#dfdfe4"
              d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
            ></path>
          </svg>
        </div>
      </button>
      <input
        className="bg-ui-level0 text-slate-200 text-[14px] font-medium max-w-[392px] w-full border-[1px] border-transparent rounded-[6px] py-[8px] px-[16px] outline-none focus-within:bg-gray-50 focus-within:opacity-60 h-fit "
        type="search"
        spellCheck="false"
        autoComplete="off"
        placeholder="Search for tools, assets and projects (⌘ + K)"
        data-active="false"
      />
      <div className="flex  items-center duration-500">
        <button className="mr-[10px] items-center flex cursor-pointer h-[32px] justify-center w-[32px]  border-[1px] border-transparent  p-0 relative">
          <Image
            className="rounded-[6px]"
            src={`https://picsum.photos/30`}
            alt="img"
            fill
          ></Image>
        </button>
        <button className="items-center flex cursor-pointer h-[32px] justify-center w-[32px]  border-[1px] border-transparent  p-0 relative bg-gray-600 rounded-[8px] text-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 11 18-5v12L3 14v-3z"></path>
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
