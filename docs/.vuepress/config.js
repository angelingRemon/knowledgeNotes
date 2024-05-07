const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');

module.exports = {

    theme: 'vdoing', // 使用依赖包主题
    // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

    title: "全菜工程师",
    description: '沉淀与共享优秀知识，构建你的个人笔记和知识管理体系',
    // base: '/knowledgeNotesPage/',
    // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
    head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        ['link', {rel: 'icon', href: '/img/favicon.ico'}], //favicons，资源放在public文件夹
        ['meta', {name: 'keywords', content: 'vuepress,theme,blog,vdoing'}],
        ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
        ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3129839_xft6cqs5gc.css' }], // 阿里在线图标
        ['noscript', {}, '<meta http-equiv="refresh" content="0; url=https://www.youngkbt.cn/noscript/"><style>.theme-vdoing-content { display:none }'],
        ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }], //网站统计所用到的iCON
        ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }] //解决 chrome 网站统计不准确问题
    ],

    // 主题配置
    themeConfig: {
        bodyBgImg: '/img/bodyBg.jpg',  // 你的图片路径(必须位于 public 下)，可以是 URL
        bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5
        // 私密文章配置
        privatePage: {
            openPrivate: true, // 开启私密文章验证，默认开启（true），如果不开启（false），则下面配置都失效
            username: "RenYongQiang", // 管理员用户名
            password: "RenYongQiang", // 管理员密码
            expire: "1h", // 登录过期时间：1d 代表 1 天，1h 代表 1 小时，仅支持这两个单位，不加单位代表秒。过期后访问私密文章重新输入用户名和密码。默认一天
            loginPath: "/vdoing/login/", // 引用登录组件的 md 文章的 permalink（必须），无默认值
            loginKey: "vdoing_manager", // 存储用户名信息的 key，默认是 vdoing_manager。系统通过该 key 验证是否登录、是否过期
            loginSession: false, // 开启是否在网页关闭或刷新后，清除登录状态，这样再次访问网页，需要重新登录，默认为 false（不开启）
            firstLogin: 0, // 第一次进入网站需要验证。用于封锁整个网站，默认为 0（不开启），1 和 2 都代表开启，区别：1 代表虽然进入网站成功，但是网站内的私密文章仍需要单独验证，2 代表进入网站成功，网站内的私密文章不需要单独验证，也就是网站内的私密文章和普通文章一样可以访问
            firstLoginKey: "vdoing_first_login", // 存储用户名信息的 key，firstLogin 开启后该配置生效，默认为 vdoing_first_login，系统通过该 key 验证是否登录、是否过期
            // 私密文章多组用户名密码
            loginInfo: {
                "vdoing_first_login" :[  // 对应 firstLoginKey 的值
                    { username: "Remon", password: "123456" },
                ],
                // "/pages/ddd917/" :[
                //     { username: "change", password: "123456" },
                // ]
            }
        },
        // 首页配置
        indexImg: {
            navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
            switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
            // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
            bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
            bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
            descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
            desc: [
                "你要想变的超乎常人的强大，必须在某个3-5年里，疯狂的行动，高密度的锻炼，",
                "这个锻炼可能包含了你人性上的锻炼，你勇气上的锻炼，你心力上的锻炼，你专业技能上的锻炼，",
                "这些都是关系你命运最核心的锻炼；",
                "总之，你就是千万不能停，只要你停了，你就开始凉了，能量和智商就开始下降了。",
                "在这个3-5年，你必须疯狂的在你的专业领域，日日不断的深耕，日复一日的死磕，",
                "不要情绪化，努力干活，去犁地，去翻土，累了就变换耕作方式，一直行动下去，就一定会有奇迹发生！",
                "---埃隆·马斯克"
            ],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFade 为 true 生效
            descFontSize: '1.4rem',   //  desc 的字体大小，默认 1.4rem。提示：原主题是1.1rem
            descFadeInTime: 120,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
            descFadeOutTime: 120,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
            descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
            bubble: false,    // 是否开启图片的气泡效果，默认为 false
            bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
            bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
        },
        nav: [
            {text: '首页', link: '/'},
            {
                text: '前端体系',

                link: '/frontEndSystem/',
                items: [
                    {text: 'HTML', link: '/frontEndSystem/html/'},
                    {text: 'CSS', link: '/frontEndSystem/css/'},
                    {text: 'JavaScript', link: '/frontEndSystem/javascript/'},
                    {text: 'ECMASCRIPT', link: '/frontEndSystem/ecmascript/'},
                    {text: 'Vue', link: '/frontEndSystem/vue/'},
                    {text: 'React', link: '/frontEndSystem/react/'},
                    {text: '数据可视化', link: '/frontEndSystem/Visualization/'}
                ]
            },
            {
                text: '代码片段',
                link: '/codeSnippet/',
            },
            {text: '工具集', link: '/tools/'},
            {text: '开发文档', link: '/document/'},
            {text: '后端学习', link: '/nodejs/'},
            {text: '写作辅助', link: '/writing/'},
            {text: '优秀资源', link: '/resources/'},
            {text: '数学学习', link: '/math/'},
            {text: '英语学习', link: '/english/'},
            {text: '个人成长', link: '/personal/'}

        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/logo.gif', // 导航栏logo
        // repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

        // docsDir: 'docs', // 编辑的文件夹
        // editLinks: true, // 编辑链接
        // editLinkText: '编辑',

        // 以下配置是Vdoing主题改动的和新增的配置
        sidebar: {mode: 'structuring', collapsable: false}, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

        // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
        updateBar: { // 最近更新栏
            showToArticle: false, // 显示到文章页底部，默认true
            // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        },
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],

        pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

        // contentBgStyle: 1,

        category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
        tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
        // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

        author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
            name: 'RenYongQiang', // 必需
            // href: 'https://github.com/xugaoyi' // 可选的
        },
        // social: { // 社交图标，显示于博主信息栏和页脚栏
        //   // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
        //   icons: [
        //     {
        //       iconClass: 'icon-doc',
        //       title: '发邮件',
        //       link: 'mailto:894072666@qq.com'
        //     },
        //     {
        //       iconClass: 'icon-github',
        //       title: 'GitHub',
        //       link: 'https://github.com/xugaoyi'
        //     },
        //     {
        //       iconClass: 'icon-erji',
        //       title: '听音乐',
        //       link: 'https://music.163.com/#/playlist?id=755597173'
        //     }
        //   ]
        // },
        footer: { // 页脚信息
            createYear: 2023, // 博客创建年份
            copyrightInfo: '全菜工程师 | MIT License', // 博客版权信息，支持a标签
        },
        htmlModules,

    },
    // 插件
    plugins: [
        // [require('./plugins/love-me'), { // 鼠标点击爱心特效
        //   color: '#11a8cd', // 爱心颜色，默认随机色
        //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
        // }],

        ['fulltext-search'], // 全文搜索

        // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        //   thirdparty: [ // 可选，默认 []
        //     {
        //       title: '在GitHub中搜索',
        //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
        //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        //     },
        //     {
        //       title: '在npm中搜索',
        //       frontUrl: 'https://www.npmjs.com/search?q=',
        //     },
        //     {
        //       title: '在Bing中搜索',
        //       frontUrl: 'https://cn.bing.com/search?q='
        //     }
        //   ]
        // }],

        [
            'vuepress-plugin-baidu-tongji', // 百度统计
            {
                hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
            }
        ],

        ['one-click-copy', { // 代码块复制按钮
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false // whether to display on the mobile side, default: false.
        }],
        ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false // 是否展示为横向样式
            }
        }],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)',
                options: {
                    bgColor: 'rgba(0,0,0,0.6)'
                },
            },
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    const dayjs = require('dayjs') // https://day.js.org/
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            }
        ],
        ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
            theme: ["miku"],
            clean: true,
            width: 210,
            height: 308,
        }],
        [
            "cursor-effects",
            {
                size: 4, // size of the particle, default: 2
                shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
    ],

    markdown: {
        // lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },

    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.js',
        '.vuepress/config/htmlModules.js',
    ]
}
