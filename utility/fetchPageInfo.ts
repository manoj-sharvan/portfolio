import { PageInfo } from "../typing";

export const fetchpageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    return pageInfo;

};