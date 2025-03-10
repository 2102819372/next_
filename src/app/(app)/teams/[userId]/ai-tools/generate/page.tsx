import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Page() {
  return (
    <div className="flex-1 flex">
      <div className="w-[20vw] bg-ui-level0 min-w-[200px]">
        <div className="flex flex-col w-full h-full overflow-hidden">
          <div className="flex flex-col pt-[16px] px-[16px] bg-ui-level0 h-full">
            <div className="bg-black items-center border border-dashed flex flex-col gap-[12px] justify-center p-[12px] relative border-gray-700 grow-[25]">
              <div className="relative flex z-[2] flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-gray-400"
                >
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                  <line x1="16" x2="22" y1="5" y2="5"></line>
                  <line x1="19" x2="19" y1="2" y2="8"></line>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
                <p className="text-white font-[normal] font-medium leading-[24px] text-center text-[16px]">
                  Drop an image or video
                </p>
                <div className="relative flex gap-[8px] text-white text-[14px]">
                  <button className="border border-ui-level0 px-[5px] rounded-[2px] font-medium">
                    select assets
                  </button>
                  <button className="border border-ui-level0 px-[5px] rounded-[2px] font-medium">
                    create image
                  </button>
                </div>
              </div>
              <button className="bg-inherit w-full h-full absolute"></button>
            </div>
            <div className="h-[16px] flex-shrink-1"></div>
            <div className="grow-[25] overflow-hidden">
              <div className="flex-col flex w-full h-full border-gray-700 border">
                <div className="flex-col flex px-[16px] ">
                  <div className="relative flex">
                    <div className="relative flex grow-[1] shrink-[1] ">
                      <div className="break-words rounded-[8px] text-white font-[normal] font-normal h-full leading-[24px] min-h-[50px] overflow-x-auto overflow-y-hidden p-[12px] pb-[24px]  w-full ">
                        <span>
                          Add an image, then describe your shot. View guide or
                          examples.
                        </span>
                        <div className="items-center bg-ui-level0 rounded-[8px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-[8px] px-[16px] py-[8px]">
            <Select defaultValue="1280">
              <SelectTrigger className="text-[12px] w-[120px] text-white ">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-ui-level0 text-white border-none">
                <SelectItem value="1280">1280x768</SelectItem>
                <SelectItem value="768">768x1280</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between px-[16px] py-[8px]">
            <Select defaultValue="gen 2">
              <SelectTrigger className="font-semibold w-[120px] text-white ">
                <SelectValue placeholder="turbo" />
              </SelectTrigger>
              <SelectContent className="bg-ui-level0 text-white border-none">
                <SelectItem value="gen 3 alpha turbo">
                  gen 3 alpha turbo
                </SelectItem>
                <SelectItem value="gen 3 alpha">gen 3 alpha</SelectItem>
                <SelectItem value="gen 2">gen 2</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="10s">
              <SelectTrigger className="font-semibold w-[120px] text-white ">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-ui-level0 text-white border-none">
                <SelectItem value="10s">10s</SelectItem>
                <SelectItem value="5s">5s</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex-col flex justify-center items-center flex-1">
        <div className=" text-gray-400 flex flex-col text-[16px] gap-[16px] h-full justify-center leading-[20px] my-0 mx-auto w-[396px] text-center">
          <div className="bg-ui-level0 w-full">
            <div className="py-[32px] px-[40px]">
              <div className="items-center flex text-white flex-1 flex-col text-[22px] gap-[8px] justify-center leading-[28px]">
                <span>Untitled Session</span>
              </div>
              <div className="text-gray-400 text-[14px] font-normal leading-[20px]">
                Select where your generations will be saved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
