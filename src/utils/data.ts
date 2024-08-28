import type { GlobalConfig, TemplateName } from "@/types/config"

//异步生成测试数据
export function asyncGenerateTestData(templateName: TemplateName = "lnxnhslfg") {
    const lnxnhslfgData: GlobalConfig = {
        base: {
            /**店铺名 */
            name: "小诺婚纱摄影馆111",
            /**品牌logo*/
            logo: "https://i0.hdslb.com/bfs/face/4936913b8a080212f46f9fa19b397ad73eaa8cc7.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
            /**简单介绍*/
            introduce: "专注为每一位新娘提供完美婚服服务",
            /**富文本店铺信息描述*/
            description: "<div style=\"text-align: center; font-family: 'Arial', sans-serif;letter-spacing: 1px\">" +
                "    <p style=\" line-height: 1.5; margin: 0px 0; text-align: justify;\">" +
                "        ✨在浪漫光影交错间觅光以匠心独运的笔触，绘就每段爱情故事中最璀璨的篇章。" +
                "    </p>" +
                "    <p style=\"line-height: 1.5; margin: 0px 0; text-align: justify;\">" +
                "        💌 我们提供全方位定制服务，从梦幻裙摆到细腻妆容，每一细节，皆为专属。" +
                "    </p>" +
                "    <p style=\"line-height: 1.5; margin: 0px 0; text-align: justify;\">" +
                "        🌟 探索觅光，开启您的梦幻婚纱之旅，让爱情最美的瞬间，在此定格永恒。" +
                "    </p>" +
                "</div>",
            /**联系电话 */
            tel: "18483628931",
            /**微信号 */
            wxId: "Sense_of_electricity",
            /**地址信息*/
            location: {
                name: "小诺婚纱摄影馆",
                address: "北京市东城区东长安街",
                latitude: 39.909,
                longitude: 116.39742
            },
            /**技术支持相关配置 */
            technicalSupport: {
                /**显示技术支持项 */
                show: true,
                /**技术支持文本显示 */
                text: "技术支持@小诺小诺",
                /**技术支持跳转链接 */
                link: ""
            }
        },
        template: {
            /**模板名称 */
            name: "lnxnhslfg",

            /**主题配置 */
            theme: {
                color: "",
                dark: false
            },
            tabBar: [
                {
                    index: 0,
                    text: "主页",
                    pagePath: "/pages/index/index",
                    iconPath: "static/tabs/home_default.png",
                    selectedIconPath: "static/tabs/home_selected.png"
                },
                {
                    index: 1,
                    text: "分类",
                    pagePath: "/pages/category/category",
                    iconPath: "static/tabs/category_default.png",
                    selectedIconPath: "static/tabs/category_selected.png"
                },
                {
                    index: 2,
                    text: "关于",
                    pagePath: "/pages/about/about",
                    iconPath: "static/tabs/cart_default.png",
                    selectedIconPath: "static/tabs/cart_selected.png"
                }
            ],
            /**首页配置信息 */
            home: {
                /**幻灯片图片列表 */
                slideImages: new Array(6).fill("https://img.picbling.cn/sgvw2_230428_175448_9690370926_2xgpn-pcPgCoverMiddle"),
                /**工作展列 */
                worksExhibition: {
                    show: true,
                    title: "婚纱西服",
                    typeList: [
                        {
                            title: "室内婚礼主纱",
                            type: "室内婚礼主纱",
                            cover: "https://img.picbling.cn/work_370926_zw829_231213_195332_5900370926_uho4h.jpeg-pcPgCoverMiddle",
                        },
                        {
                            title: "户外婚礼主纱",
                            type: "户外婚礼主纱",
                            cover: "https://img.picbling.cn/work_370926_6xemp_240106_191420_3140370926_feoc9.jpeg-pcPgCoverMiddle",

                        },
                        {
                            title: "鱼尾/迎宾纱",
                            type: "鱼尾/迎宾纱",
                            cover: "https://img.picbling.cn/work_370926_wwdzf_240107_154937_7700370926_qk6p1.jpeg-pcPgCoverMiddle",

                        },
                        {
                            title: "中式出门服",
                            type: "中式出门服",
                            cover: "https://img.picbling.cn/work_370926_cqxw1_240107_170904_3910370926_oajay.jpeg-pcPgCoverMiddle",

                        },
                        {
                            title: "敬酒晚礼服",
                            type: "敬酒晚礼服",
                            cover: "https://img.picbling.cn/work_370926_6fgtt_240107_191332_9950370926_ws83t.jpeg-pcPgCoverMiddle",

                        },
                        {
                            title: "其他婚服",
                            type: "其他婚服",
                            cover: "https://img.picbling.cn/work_370926_b5dk3_231215_120228_1190370926_60b41.jpeg-pcPgCoverMiddle",

                        },
                    ]
                },
                /**视频展示 */
                videoShow: {
                    title: "视频展示",
                    /**是否显示 */
                    show: true,
                    /**视频封面 */
                    videoCover: "https://video.picbling.cn/zzz_1989m_230217_150135_2290370926_twqra-1080-vframe?t=1719153900089",
                    /**视频链接地址 */
                    videoPath: "https://video.picbling.cn/zzz_1989m_230217_150135_2290370926_twqra-1080.mp4"
                },
                /**关于我们 */
                aboutUs: {
                    title: "关于我们",
                    /**是否显示 */
                    show: true,
                    /**是否需要跳转详情 */
                    isNeedJumpToDetails: true
                }
            },
            /**分类配置信息 */
            classify: {
                /**渲染类型 */
                renderType: "TopAndBottom",

                /**类型列表 */
                typeList: [{
                    title: "室内婚礼主纱",
                    type: "室内婚礼主纱"
                },
                {
                    title: "户外婚礼主纱",
                    type: "户外婚礼主纱",

                },
                {
                    title: "鱼尾/迎宾纱",
                    type: "鱼尾/迎宾纱",

                },
                {
                    title: "中式出门服",
                    type: "中式出门服",

                },
                {
                    title: "敬酒晚礼服",
                    type: "敬酒晚礼服",

                },
                {
                    title: "其他婚服",
                    type: "其他婚服",
                }],
                /**分类图集数据 */
                atlasList: [
                    {
                        id: "1",
                        title: "方领重工婚纱",
                        description: "灯纸稀烟人罕\n湖泊星灿水波松散\n你经过\n山茶花开的河畔\n少有流云飞驰\n风也回转",
                        cover: "https://img.picbling.cn/work_370926_6fgtt_240107_191332_9950370926_ws83t.jpeg",
                        coverOriginal: "https://img.picbling.cn/work_370926_b0ove_240107_191333_5300370926_2pfgm.jpeg",
                        type: "室内婚礼主纱",
                        images: [
                            {
                                "url": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg",
                                "width": 1280,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg-wechatPcShare",
                                "id": 2
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg",
                                "width": 1138,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg-wechatPcShare",
                                "id": 3
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg",
                                "width": 1201,
                                "height": 1601,
                                "thumbUrl": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg-wechatPcShare",
                                "id": 4
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg",
                                "width": 1256,
                                "height": 1675,
                                "thumbUrl": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg-wechatPcShare",
                                "id": 5
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg",
                                "width": 1252,
                                "height": 1669,
                                "thumbUrl": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg-wechatPcShare",
                                "id": 6
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg",
                                "width": 1280,
                                "height": 1706,
                                "thumbUrl": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg-wechatPcShare",
                                "id": 7
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "方领重工婚纱",
                        description: "灯纸稀烟人罕\n湖泊星灿水波松散\n你经过\n山茶花开的河畔\n少有流云飞驰\n风也回转",
                        cover: "https://img.picbling.cn/work_370926_6fgtt_240107_191332_9950370926_ws83t.jpeg",
                        coverOriginal: "https://img.picbling.cn/work_370926_b0ove_240107_191333_5300370926_2pfgm.jpeg",
                        type: "户外婚礼主纱",
                        images: [
                            {
                                "url": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg",
                                "width": 1280,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg-wechatPcShare",
                                "id": 2
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg",
                                "width": 1138,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg-wechatPcShare",
                                "id": 3
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg",
                                "width": 1201,
                                "height": 1601,
                                "thumbUrl": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg-wechatPcShare",
                                "id": 4
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg",
                                "width": 1256,
                                "height": 1675,
                                "thumbUrl": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg-wechatPcShare",
                                "id": 5
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg",
                                "width": 1252,
                                "height": 1669,
                                "thumbUrl": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg-wechatPcShare",
                                "id": 6
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg",
                                "width": 1280,
                                "height": 1706,
                                "thumbUrl": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg-wechatPcShare",
                                "id": 7
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "方领重工婚纱",
                        description: "灯纸稀烟人罕\n湖泊星灿水波松散\n你经过\n山茶花开的河畔\n少有流云飞驰\n风也回转",
                        cover: "https://img.picbling.cn/work_370926_6fgtt_240107_191332_9950370926_ws83t.jpeg",
                        coverOriginal: "https://img.picbling.cn/work_370926_b0ove_240107_191333_5300370926_2pfgm.jpeg",
                        type: "鱼尾/迎宾纱",
                        images: [
                            {
                                "url": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg",
                                "width": 1280,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg-wechatPcShare",
                                "id": 2
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg",
                                "width": 1138,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg-wechatPcShare",
                                "id": 3
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg",
                                "width": 1201,
                                "height": 1601,
                                "thumbUrl": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg-wechatPcShare",
                                "id": 4
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg",
                                "width": 1256,
                                "height": 1675,
                                "thumbUrl": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg-wechatPcShare",
                                "id": 5
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg",
                                "width": 1252,
                                "height": 1669,
                                "thumbUrl": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg-wechatPcShare",
                                "id": 6
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg",
                                "width": 1280,
                                "height": 1706,
                                "thumbUrl": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg-wechatPcShare",
                                "id": 7
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "方领重工婚纱",
                        description: "灯纸稀烟人罕\n湖泊星灿水波松散\n你经过\n山茶花开的河畔\n少有流云飞驰\n风也回转",
                        cover: "https://img.picbling.cn/work_370926_6fgtt_240107_191332_9950370926_ws83t.jpeg",
                        coverOriginal: "https://img.picbling.cn/work_370926_b0ove_240107_191333_5300370926_2pfgm.jpeg",
                        type: "中式出门服",
                        images: [
                            {
                                "url": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg",
                                "width": 1280,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg-wechatPcShare",
                                "id": 2
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg",
                                "width": 1138,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg-wechatPcShare",
                                "id": 3
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg",
                                "width": 1201,
                                "height": 1601,
                                "thumbUrl": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg-wechatPcShare",
                                "id": 4
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg",
                                "width": 1256,
                                "height": 1675,
                                "thumbUrl": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg-wechatPcShare",
                                "id": 5
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg",
                                "width": 1252,
                                "height": 1669,
                                "thumbUrl": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg-wechatPcShare",
                                "id": 6
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg",
                                "width": 1280,
                                "height": 1706,
                                "thumbUrl": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg-wechatPcShare",
                                "id": 7
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "方领重工婚纱",
                        description: "灯纸稀烟人罕\n湖泊星灿水波松散\n你经过\n山茶花开的河畔\n少有流云飞驰\n风也回转",
                        cover: "https://img.picbling.cn/work_370926_6fgtt_240107_191332_9950370926_ws83t.jpeg",
                        coverOriginal: "https://img.picbling.cn/work_370926_b0ove_240107_191333_5300370926_2pfgm.jpeg",
                        type: "敬酒晚礼服",
                        images: [
                            {
                                "url": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg",
                                "width": 1280,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg-wechatPcShare",
                                "id": 2
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg",
                                "width": 1138,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg-wechatPcShare",
                                "id": 3
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg",
                                "width": 1201,
                                "height": 1601,
                                "thumbUrl": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg-wechatPcShare",
                                "id": 4
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg",
                                "width": 1256,
                                "height": 1675,
                                "thumbUrl": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg-wechatPcShare",
                                "id": 5
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg",
                                "width": 1252,
                                "height": 1669,
                                "thumbUrl": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg-wechatPcShare",
                                "id": 6
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg",
                                "width": 1280,
                                "height": 1706,
                                "thumbUrl": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg-wechatPcShare",
                                "id": 7
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "方领重工婚纱",
                        description: "灯纸稀烟人罕\n湖泊星灿水波松散\n你经过\n山茶花开的河畔\n少有流云飞驰\n风也回转",
                        cover: "https://img.picbling.cn/work_370926_6fgtt_240107_191332_9950370926_ws83t.jpeg",
                        coverOriginal: "https://img.picbling.cn/work_370926_b0ove_240107_191333_5300370926_2pfgm.jpeg",
                        type: "其他婚服",
                        images: [
                            {
                                "url": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg",
                                "width": 1280,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_3gur0_240107_191334_1810370926_1mpkj.jpeg-wechatPcShare",
                                "id": 2
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg",
                                "width": 1138,
                                "height": 1707,
                                "thumbUrl": "https://img.picbling.cn/work_370926_wlfv1_240107_191334_9020370926_2wveo.jpeg-wechatPcShare",
                                "id": 3
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg",
                                "width": 1201,
                                "height": 1601,
                                "thumbUrl": "https://img.picbling.cn/work_370926_5fndf_240107_191336_0170370926_p6b95.jpeg-wechatPcShare",
                                "id": 4
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg",
                                "width": 1256,
                                "height": 1675,
                                "thumbUrl": "https://img.picbling.cn/work_370926_f9dtf_240107_191336_7540370926_0bayk.jpeg-wechatPcShare",
                                "id": 5
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg",
                                "width": 1252,
                                "height": 1669,
                                "thumbUrl": "https://img.picbling.cn/work_370926_s30x7_240107_191338_0940370926_b0qsj.jpeg-wechatPcShare",
                                "id": 6
                            },
                            {
                                "url": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg",
                                "width": 1280,
                                "height": 1706,
                                "thumbUrl": "https://img.picbling.cn/work_370926_95ixx_240107_191338_7440370926_g22l9.jpeg-wechatPcShare",
                                "id": 7
                            }
                        ]
                    }
                ]
            },
            /**关于配置信息 */
            about: {
                /**图片概览九宫格 */
                pictureOverview: [
                    "https://img.picbling.cn/work_370926_6fgtt_240107_191332_9950370926_ws83t.jpeg-pcWorkCoverThumb",
                    "https://img.picbling.cn/work_370926_cqxw1_240107_170904_3910370926_oajay.jpeg-pcWorkCoverThumb",
                    "https://img.picbling.cn/work_370926_wwdzf_240107_154937_7700370926_qk6p1.jpeg-pcWorkCoverThumb",
                    "https://img.picbling.cn/work_370926_wwdzf_240107_154937_7700370926_qk6p1.jpeg-pcWorkCoverThumb",
                    "https://img.picbling.cn/work_370926_zw829_231213_195332_5900370926_uho4h.jpeg-pcWorkCoverThumb",
                    "https://img.picbling.cn/work_370926_zw829_231213_195332_5900370926_uho4h.jpeg-pcWorkCoverThumb",
                    "https://img.picbling.cn/work_370926_zw829_231213_195332_5900370926_uho4h.jpeg-pcWorkCoverThumb",
                    "https://img.picbling.cn/work_370926_zw829_231213_195332_5900370926_uho4h.jpeg-pcWorkCoverThumb",
                    "https://img.picbling.cn/work_370926_zw829_231213_195332_5900370926_uho4h.jpeg-pcWorkCoverThumb"
                ]
            }

        }
    }
    const dataSet: {
        [key in TemplateName]?: GlobalConfig
    } = {
        "lnxnhslfg": lnxnhslfgData
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataSet[templateName])
        }, 5000)
    })
}

