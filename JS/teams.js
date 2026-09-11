// ============================================================
// 团队数据 —— 以后增加新的合作团队，只需要在下面的数组里
// 复制一段 {...} 加进去即可，不需要改动任何 HTML 文件。
//
// 字段说明：
//   id        必填。URL 里用的英文短标识（?id=jerry），只能用小写字母和连字符
//   region    必填。"greater-vancouver" 或 "vancouver-island"
//   nameZh    中文显示名，格式：姓 + 师傅
//   nameEn    英文显示名，格式：英文名 + 's Team
//   regionZh  中文地区名
//   regionEn  英文地区名
//   bioZh     中文简介。格式：主营地区 | 核心业务场景。保持客观，不用形容词
//   bioEn     英文简介，同上
//   links     各平台链接。目前为占位（"#"），点击不跳转。
//             以后有了正式链接，把 "#" 换成真实网址即可。
//   photos    作品图路径。indoor 室内 / outdoor 室外，各 9 张，共 18 张。
//             目前为空数组，页面会显示灰色占位框。
//             以后有照片了，把路径按顺序填进数组即可，例如：
//             indoor: ["images/teams/jerry/indoor-01.jpg", ...]
//
// ---- 添加新团队的步骤 ----
// 1. 在 images/teams/ 下新建该师傅的文件夹（如 wang/）
// 2. 上传 18 张作品图
// 3. 复制下面一整段 { ... }，粘贴到数组里，修改内容
// 4. 推送到 GitHub，Netlify 自动重新部署
// ============================================================

var TEAMS = [
  {
    id: "jerry",
    region: "greater-vancouver",
    nameZh: "陈师傅",
    nameEn: "Jerry's Team",
    regionZh: "大温地区",
    regionEn: "Greater Vancouver",
    bioZh: "大温地区 | 专注室内外装修",
    bioEn: "Greater Vancouver | Interior and exterior renovation",
    links: {
      youtube: "#",
      xiaohongshu: "#",
      instagram: "#",
      facebook: "#"
    },
    photos: {
      indoor: [],
      outdoor: []
    }
  },

  {
    id: "tony",
    region: "greater-vancouver",
    nameZh: "唐师傅",
    nameEn: "Tony's Team",
    regionZh: "大温地区",
    regionEn: "Greater Vancouver",
    bioZh: "大温地区 | 专注室内外装修",
    bioEn: "Greater Vancouver | Interior and exterior renovation",
    links: {
      youtube: "https://www.youtube.com/playlist?list=PLRi8zG9qrBJw",
      xiaohongshu: "#",
      instagram: "#",
      facebook: "#"
    },
    photos: {
      indoor: [],
      outdoor: []
    }
  }
];

// 每个团队的作品位数量（照片未上传时，用来决定显示多少个占位框）
var PHOTO_SLOTS = { indoor: 9, outdoor: 9 };

// 地区分组的显示顺序与名称。没有团队的地区不会显示。
var REGIONS = [
  { key: "greater-vancouver", zh: "大温地区", en: "Greater Vancouver" },
  { key: "vancouver-island", zh: "温哥华岛", en: "Vancouver Island" }
];

// 平台显示名（links 对象的 key 对应这里）
var PLATFORMS = {
  youtube: "YouTube",
  xiaohongshu: "小红书",
  instagram: "Instagram",
  facebook: "Facebook"
};
