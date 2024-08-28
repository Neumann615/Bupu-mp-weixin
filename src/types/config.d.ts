export interface GlobalConfig {
    /**基本信息 */
    base: BaseConfig,
    template: TemplateConfig1
}

export interface BaseConfig {
    /**店铺名 */
    name: string
    /**品牌logo*/
    logo: string
    /**简单介绍*/
    introduce: string
    /**富文本店铺信息描述*/
    description: string
    /**联系电话 */
    tel: string
    /**微信号 */
    wxId: string
    /**地址信息*/
    location: {
        name: string
        address: string
        latitude: number
        longitude: number
    },
    /**技术支持相关配置 */
    technicalSupport: {
        /**显示技术支持项 */
        show: boolean,
        /**技术支持文本显示 */
        text: string,
        /**技术支持跳转链接 */
        link: string
    }
}

/** 参照模板名称(鹿娜新娘婚纱礼服馆、西安菲林社、零度薇拉摄影)*/
export type TemplateName = "lnxnhslfg" | "xafls" | "ndwlsy"

/**分类显示渲染类型 */
export type ClassifyRenderType = "TopAndBottom" | "LeftAndRight"

interface BaseTemplateConfig {
    /**模板名称 */
    name: TemplateName,
    /**主题配置 */
    theme: {
        color: string
        dark: boolean
    }
}

// 对应鹿娜新娘婚纱礼服馆
export interface TemplateConfig1 extends BaseTemplateConfig {
    /**底部工具栏 */
    tabBar: {
        index: number
        text: string
        pagePath: string
        iconPath: string
        selectedIconPath: string
    }[],
    /**首页配置信息 */
    home: {
        /**幻灯片图片列表 */
        slideImages: string[],
        /**工作展列 */
        worksExhibition: {
            show: boolean,
            title?: string,
            typeList: {
                id?: string,
                cover: string
                title: string
                subTitle?: string
                type: string
            }[]
        }
        /**视频展示 */
        videoShow: {
            title?: string,
            /**是否显示 */
            show: boolean
            /**视频封面 */
            videoCover: string
            /**视频链接地址 */
            videoPath: string
        }
        /**关于我们 */
        aboutUs: {
            title?: string,
            /**是否显示 */
            show: boolean
            /**是否需要跳转详情 */
            isNeedJumpToDetails: boolean
        }
    },
    /**分类配置信息 */
    classify: {
        /**渲染类型 */
        renderType: ClassifyRenderType
        /**类型列表 */
        typeList: {
            id?: string
            title: string,
            type: string
        }[]
        /**分类图集数据 */
        atlasList: {
            id: string
            /**图集标题*/
            title: string
            /**图集描述 */
            description: string
            /**图集封面 */
            cover: string
            /**图集封面源地址 */
            coverOriginal: string
            /**图集类型 */
            type: string
            /**图集图片列表 */
            images: {
                id: string | number,
                width?: number,
                height?: number,
                url: string
                thumbUrl: string
            }[]
        }[]
    },
    /**关于配置信息 */
    about: {
        /**图片概览九宫格 */
        pictureOverview: string[]
    }
}

