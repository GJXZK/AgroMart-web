import type { BannerDto,productCateDto } from "@/model/HomeModel";
import { request } from "..";
const getBannners = async(): Promise<BannerDto[]>=>{
    const resp = await request(`/home/content`)
    return resp.data
}
const getProductCateList = async(parentId:string): Promise<productCateDto[]>=>{
    const resp = await request(`/home/productCateList/${parentId}`)
    return resp.data
}
export default {
    getBannners,getProductCateList
}