// import instance from "@/utils/request"
import recommendData from "@/mockData/recommend";
import type { banner, list } from "#/explore";
export const recommend = (): Promise<{ banner: banner[]; list: list[] }> =>
  new Promise((resolve) => {
    resolve(recommendData as unknown as { banner: banner[]; list: list[] });
  });
