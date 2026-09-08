# limidation.com — Limidation Construction Inc.

装修统筹业务网站。纯 HTML/CSS/JS，无需构建步骤，直接部署到 Netlify。

## 文件说明

```
index.html      首页
services.html   服务项目
process.html    施工流程
team.html       合作团队总览（按地区分组）
profile.html    团队专属作品页模板（通过 ?id=xxx 渲染）
contact.html    联系我们 / 留言表单（已接入 Netlify Forms）

CSS/style.css   样式（强调色为深藏蓝 #1f3864）
JS/lang.js      中英文切换逻辑
JS/teams.js     ★ 团队数据 —— 以后唯一需要改动的文件
JS/team.js      团队总览页渲染逻辑
JS/profile.js   团队专属页渲染逻辑

favicon.ico                浏览器标签页图标（已生成）
images/logo-mark.png       页头用的图形标，透明背景（已生成）
images/logo.png            完整版 logo，透明背景（已生成）
images/apple-touch-icon.png 苹果设备主屏图标 180×180（已生成）
images/teams/jerry/        Jerry 团队作品图（待放入）
images/teams/tony/         Tony 团队作品图（待放入）
```

## 图片文件说明

logo 相关的四个文件都已生成好，直接部署即可，不需要再准备任何图片。

- `images/logo-mark.png` —— 从完整 logo 中裁出的图形部分（L 形拼砖 + 人物），
  用在页头，旁边配 HTML 文字「LIMIDATION / 砺地」。
  这样处理是因为完整 logo 缩到页头高度后，下面那行公司名会看不清。
- `images/logo.png` —— 完整版（图形 + 全部文字），留作其它用途，
  比如印刷物料、社媒头像、视频片头。
- 白色背景已去除，砖缝里的白线和人物外围的白边都保留了。

## 配色说明

`.com` 与 `.ca` 刻意做了区分，避免客户混淆两个网站：

|  | limidation.ca | limidation.com |
|---|---|---|
| 页头 | 黑底白字 | 白底深色字 |
| 主色 | 金铜 #b5842e | 深藏蓝 #1f3864 |
| Hero | 黑底 | 深蓝底 |

页头之所以用浅色，是因为这版 logo 里的人物是黑色实心剪影，
放在深色页头上会和背景糊在一起看不清。

## 团队专属页的网址

- Jerry：`limidation.com/profile.html?id=jerry`
- Tony：`limidation.com/profile.html?id=tony`

名片二维码指向对应师傅的专属页；名片上印的网址写 `limidation.com` 即可。

## 增加新团队的步骤

1. 在 `images/teams/` 下新建该师傅的文件夹（如 `wang/`）
2. 上传 18 张作品图，命名 `indoor-01.jpg` … `indoor-09.jpg`、`outdoor-01.jpg` … `outdoor-09.jpg`
3. 打开 `JS/teams.js`，复制一整段 `{ ... }` 粘贴到数组里，修改各字段
4. 推送到 GitHub，Netlify 自动重新部署

不需要新建 HTML 文件，不需要修改 CSS 或其它 JS。

## 上传照片

照片路径填进 `JS/teams.js` 的 `photos.indoor` / `photos.outdoor` 数组即可。
数组为空时，页面自动显示灰色「照片待上传」占位框。

## 平台链接

`JS/teams.js` 里 `links` 的值目前是 `"#"`，页面上显示为不可点击的灰色标签。
换成真实网址后，自动变成可点击的外链按钮。

## 部署到 Netlify

1. 把整个文件夹的内容推送到 GitHub 仓库
2. Netlify → Add new site → Import an existing project → 选择该仓库
3. Build command 留空，Publish directory 填 `.`
4. Deploy，几分钟后会给一个临时网址（xxx.netlify.app）先检查效果
5. 确认无误后，在域名注册商后台把 limidation.com 的 DNS 指向 Netlify

## 联系表单

`contact.html` 的表单已接入 Netlify Forms，部署后自动生效，提交内容出现在 Netlify 后台。
表单含隐藏字段 `site-source=limidation-com`，用于区分询盘来自 .com 还是 .ca。

## 邮箱地址

目前统一使用 `limidation@gmail.com`，只出现在 `contact.html` 一处。
以后升级到 `info@limidation.com` 时，改那一处即可。
