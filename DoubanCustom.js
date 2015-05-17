/*global $, jQuery */

/* 
* @Author: hanjiyun
* @Date:   2013-12-29 02:07:28
* @Last Modified by:   Jiyun
* @Last Modified time: 2015-05-17 23:39:35
*/

// ==UserScript==
// @name        DoubanCustom
// @namespace   jiyun@han.im
// @include     http://*.douban.com/*
// @version     1.1
// @grant       GM_setValue
// @grant       GM_getValue
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==


$(function(){

/*==================
    导航处理
==================*/
    $('.top-nav-doubanapp, #db-nav-sns .nav-items').remove();
    var count = $('#top-nav-doumail-link em').html();
    $('#top-nav-doumail-link').html('豆邮<em>' + count + '</em>');
    $('.global-nav-items').html('').append('<div class="global-nav-items"><ul><li><a href="http://www.douban.com/">首页</a></li><li><a href="http://www.douban.com/mine">我的豆瓣</a></li><li><a href="http://www.douban.com/mine/statuses">我的广播</a></li><li><a href="http://book.douban.com/">读书</a></li><li><a href="http://movie.douban.com/">电影</a></li><li><a href="http://music.douban.com/">音乐</a></li><li><a href="http://www.douban.com/location/">同城</a></li><li><a href="http://www.douban.com/group/">小组</a></li><li><a href="http://read.douban.com/?dcs=top-nav&amp;dcm=douban">阅读</a></li><li><a href="http://douban.fm/">豆瓣FM</a></li></ul></div>')

/*==================
    首页右侧广告处理
==================*/

// 屏蔽右侧广告、试试更多有趣的内容、正在发生、豆瓣系列应用; 覆盖滚动时的position:fixed。

    $('head').append('<style type="text/css">.fixed-fields{position:static!important;}#dale_homepage_login_bottom_right, #dale_homepage_login_top_right, .notify-mod, #events, .mobile-app-entrance, #dale_homepage_login_bottom_middle_right, #dale_homepage_online_activity_promo, .channel_promo, #tags, #side-apps{display:none!important;}</style>')

    $('#fp-sites').next('div').hide();

});



