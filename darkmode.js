// ==UserScript==
// @name         bilibili-darkmode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to make bilibili dark!
// @author       Kudryavka
// @match        https://*.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico?v=1
// @require      https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

var $$ = document.querySelectorAll.bind(document);

(function () {
  "use strict";
  // 全局色彩样式覆写
  GM_addStyle(`
    :root{
      --bg1: #121212 !important;
      --bg1_float: #1F1F1F !important;
      --bg2: #121212 !important;
      --bg2_float: #2E2E2E !important;
      --bg3: #2E2E2E !important;
      --text1: #C8CBCF !important;
      --text2: #ABADB0 !important;
      --line_light: #2E2E2E !important;
      --line_regular: #4D4D4D !important;
      --graph_bg_thin: #1F1F1F !important;
      --graph_bg_regular: #262626 !important;
      --graph_bg_thick: #3D3D3D !important;
      --brand_blue: #0096CC !important;
     }
  `);
  // 颜色配置覆盖
  GM_addStyle(`
    :root{
      --Or5: #FF7F24 !important;
    }
  `)
  // 阴影处理
  GM_addStyle(`
    #bilibili-player-placeholder {
      box-shadow: none !important;
    }
    .vip-login-tip {
      box-shadow: 0 0 30px rgba(150,150,150,.1);
    }
  `);
  // 边框处理
  GM_addStyle(`
    #nav-searchform {
      border: 1px solid var(--bg3) !important;
      border-bottom: none !important;
    }
    .search-panel {
      border: 1px solid var(--bg3) !important;
      border-top: none !important;
    }
  `);
  // 视频卡片icon
  GM_addStyle(`
    .bili-video-card__info--icon-text{
      background-color: initial !important;
      box-shadow: 0 0 1px 1px var(--Or5);
    }
  `)
  // headerBar收藏夹
  GM_addStyle(`
    .favorite-panel-popover__nav .tab-item--active{
      color: #E6E6E6;
    }
    .favorite-panel-popover__nav .tab-item--active .tab-item__num {
      color: #E6E6E6;
    }
  `)
})();
