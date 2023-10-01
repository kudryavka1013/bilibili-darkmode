// ==UserScript==
// @name         b站深色模式
// @name:zh-cn   b站深色模式
// @name:en      bilibili darkmode
// @license      MIT
// @version      0.1.1
// @description  给b站添加深色样式
// @description:zh-cn  给b站添加深色样式
// @description:en make bilibili dark!
// @author       kudryavka1013
// @match        https://*.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico?v=1
// @require      https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js
// @grant        GM_addStyle
// @run-at       document-start
// @homepageURL  https://github.com/kudryavka1013/bilibili-darkmode
// @namespace https://greasyfork.org/users/234510
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

var $$ = document.querySelectorAll.bind(document);

(function () {
  "use strict";
  // 全局色彩样式覆写
  GM_addStyle(`
    :root{
      --bg1: #121212 !important;
      --bg1_float: #1A1A1A !important;
      --bg2: #121212 !important;
      --bg2_float: #2E2E2E !important;
      --bg3: #2E2E2E !important;
      --text1: #C8CBCF !important;
      --text2: #ABADB0 !important;
      --line_light: #2E2E2E !important;
      --line_regular: #4D4D4D !important;
      --line_bold: #767676 !important;
      --graph_bg_thin: #1F1F1F !important;
      --graph_bg_regular: #262626 !important;
      --graph_bg_thick: #3D3D3D !important;
      --brand_blue: #0096CC !important;
      --v_text_disabled: #4D4D4D !important;
      --brand_blue_thin: #0096CC !important;
      --graph_weak: #2E2E2E !important;
     }
  `);
  // 颜色配置覆盖
  GM_addStyle(`
    :root{
      --Or5: #FF7F24 !important;
    }
  `)
  // 视频播放页处理
  GM_addStyle(`
    #bilibili-player-placeholder {
      box-shadow: none !important;
    }
    .vip-login-tip {
      box-shadow: 0 0 30px rgba(150,150,150,.1);
    }
    .van-popover {
      background-color: var(--bg1) !important;
      border-color: var(--line_regular) !important;
     }
  `);
  // 首页
  GM_addStyle(`
    #nav-searchform:hover {
      border: 1px solid var(--bg3) !important;
    }
    #nav-searchform.is-focus {
      border: 1px solid var(--bg3) !important;
      border-bottom: none !important;
      opacity: 1 !important;
    }
    .search-panel {
      border: 1px solid var(--bg3) !important;
      border-top: none !important;
    }
  `);
  // 视频卡片icon
  GM_addStyle(`
    .bili-video-card__info--icon-text {
      background-color: initial !important;
      box-shadow: 0 0 1px 1px var(--Or5);
    }
  `)
  // headerBar收藏夹
  GM_addStyle(`
    .favorite-panel-popover__nav .tab-item--active {
      color: #E6E6E6;
    }
    .favorite-panel-popover__nav .tab-item--active .tab-item__num {
      color: #E6E6E6;
    }
    .header-channel {
      box-shadow: 0 2px 4px rgba(255,255,255,.08) !important;
    }
  `)
  // 搜索页
  GM_addStyle(`
    .vui_button--tab:active, .vui_button--tab.vui_button--active, .vui_button--tab.vui_button--active:hover {
      background-color: var(--graph_bg_thick) !important;
    }
    .vui_button[disabled], .vui_button[disabled]:hover, .vui_button[disabled]:active, .vui_button[disabled].vui_button--active {
      border: 1px solid var(--line_regular) !important;
    }
    .esport-card-options .btn:hover {
      color: #FFF !important;
    }
  `)
  // 评论区
  GM_addStyle(`
    .reply-box .box-normal .reply-box-send .send-text {
      color: var(--text2) !important;
    }
    .reply-box .box-normal .reply-box-send:hover .send-text {
      color: #FFF !important;
    }
    .reply-box.box-active .box-normal .reply-box-send.send-active .send-text {
      color: #FFF !important;
    }
    .reply-box .box-normal .reply-box-send:after {
      opacity: .8 !important;
    }
    .reply-box .box-normal .reply-box-send:hover:after {
      opacity: 1 !important;
    }
    .reply-box.box-active .box-normal .reply-box-send.send-active:after {
      opacity: 1 !important;
    }
    .reply-box .box-normal .reply-box-warp .reply-box-textarea {
      border: 1px solid var(--line_regular) !important;
    }
    .reply-box .box-expand .reply-box-emoji .emoji-btn {
      border: 1px solid var(--line_regular) !important;
    }
    .reply-box .box-expand .at-btn {
      border: 1px solid var(--line_regular) !important;
    }
    .reply-box .box-normal .reply-box-warp .reply-box-textarea.focus,
    .reply-box .box-normal .reply-box-warp .reply-box-textarea:hover {
      border-color: var(--line_bold) !important;
    }
    .user-card {
      border: .5px solid var(--v_line_regular) !important;
    }
    .reply-item .root-reply-container .content-warp .root-reply .reply-tag-list .reply-tag-item {
      background-color: initial !important;
      box-shadow: 0 0 1px 1px !important;
    }
    .reply-operation .operation-list {
      box-shadow: 0 0 5px #fff3 !important;
    }
  `)
  // 动态首页
  GM_addStyle(`
    #app .bg {
      background-image: none !important;
      background-color: var(--bg1_float) !important;
    }
    .bili-dyn-my-info,
    .bili-dyn-live-users,
    .bili-dyn-publishing,
    .bili-dyn-up-list,
    .bili-dyn-list-tabs,
    .bili-dyn-item,
    .bili-dyn-topic-box {
      box-shadow: 0 0 1px #FFF;
    }
    .bili-dyn-live-users__item-container:hover,
    .relevant-topic-container__item:hover {
      background-color: var(--graph_bg_regular) !important;
    }
    .bili-dyn-sidebar .bili-dyn-sidebar__btn {
      box-shadow: 0 0 1px #FFF;
    }
    .bili-user-profile {
      box-shadow: 0 0 1px 0px #FFF !important;
    }
  `)
})();
