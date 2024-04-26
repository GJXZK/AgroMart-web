export interface BannerDto {
    bigPic: string
    brandStory: string
    factoryStatus: number  //是否为品牌制造商：0->不是；1->是
    firstLetter: string
    id: number
    logo: string
    name: string
    productCommentCount: number
    productCount: number
    showStatus: number
    sort: number
}
export interface productCateDto {
    description: string
    icon: string
    id: number
    keywords: string
    level: number//分类级别：0->1级；1->2级
    name: string
    navStatus: number //是否显示在导航栏：0->不显示；1->显示
    parentId: number //上机分类的编号：0表示一级分类
    productCount: number
    productUnit: string
    showStatus: number //显示状态：0->不显示；1->显示
    sort: number
}