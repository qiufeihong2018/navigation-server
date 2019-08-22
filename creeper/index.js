/* eslint-disable eqeqeq */
'use strict';
const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/map');
// 引入数据模型模块
const superAdminMap = require('../collections/superAdminMap.js');


/**
 * 请求函数
 */
function reptile(url, type) {
  request(url, function(error, res, body) {
    // console.error('error:', error); // Print the error if one occurred
    // eslint-disable-next-line max-len
    // console.log('statusCode:', response && response.statusCode);
    // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    if (!error && res.statusCode == 200) {
      const $ = cheerio.load(body);
      const panelBlock = $('.panel');
      const arr = [];

      const map = new Map([
        ['设计-热门推荐', 'recommendationDesign'],
        ['设计-灵感采集', 'inspiration'],
        ['设计-界面交互', 'interaction'],
        ['设计-设计规范', 'designSpecifications'],
        ['设计-在线工具', 'onlineTools'],
        ['设计-icon图标', 'icon'],
        ['设计-设计素材', 'designMaterial'],
        ['设计-图库素材', 'galleryMaterial'],
        ['设计-颜色搭配', 'colourAssortment'],
        ['设计-字体字形', 'fontGlyph'],
        ['设计-学习教程', 'learningTutorial'],
        ['设计-设计团队', 'designTeam'],
        ['运营-域名注册', 'domainName'],
        ['运营-数据分析', 'dataAnalysis'],
        ['运营-数据工具', 'dataTools'],
        ['运营-数据收集', 'dataCollection'],
        ['运营-新媒平台', 'mediaPlatform'],
        ['运营-新媒工具', 'mediaTools'],
        ['运营-网站收录', 'websiteInclusion'],
        ['运营-ASO优化', 'ASOOptimization'],
        ['产品-新品推荐', 'recommendationProduct'],
        ['产品-产品资讯', 'productInformation'],
        ['产品-原型工具', 'prototypeTool'],
        ['产品-思维导图', 'mindMap'],
        ['产品-协同工作', 'teamwork'],
        ['产品-文档编辑', 'documentEditing'],
        ['产品-云盘储存', 'diskStorage'],
        ['产品-趣味产品', 'interestingProducts'],
        ['前端-热门推荐', 'recommendationFront-end'],
        ['前端-前端框架', 'frontFrameFront-end'],
        ['前端-论坛社区', 'forumCommunityFront-end'],
        ['前端-学习平台', 'learningPlatformFront-end'],
        ['前端-个人框架', 'frontFrameFront-end'],
        ['前端-在线编程', 'onlineProgrammingFront-end'],
        ['前端-代码托管', 'codeHostingFront-end'],
        ['前端-构建工具', 'buildToolFront-end'],
        ['前端-检查测试', 'inspectionTestFront-end'],
        ['前端-内容管理', 'frontFrameFront-end'],
        ['前端-后端系统', 'recommendationBack-end'],
        ['工作-招聘平台', 'recruitmentPlatform'],
        ['工作-程序兼职', 'partTimeProgram'],
        ['工作-设计兼职', 'partTimeDesign'],
        ['极客-开发硬件', 'developmentHardware'],
        ['极客-硬件系统', 'hardwareSystem'],
        ['极客-游戏系统', 'gameSystem'],
        ['极客-其他工具', 'otherTools'],
        ['极客-信息查询', 'informationInquiry']
      ]);
      for (let i = 0; i < panelBlock.length; i++) {
        const titleLen = $('.panel').eq(i).find('.card-title').length;
        for (let j = 0; j < titleLen; j++) {
          const obj = {};
          obj.category = map.get((type + $('.panel-title.card').eq(i).text().trim()));
          obj.name = $('.panel').eq(i).find('.card-title').eq(j).text().trim();
          obj.website = $('.panel').eq(i).find('.card .card-heading').eq(j).attr('title');
          obj.describe = $('.panel').eq(i).find('.card .card-body').eq(j).text().trim();
          obj.logo = 'http://chuangzaoshi.com/' + $('.panel').eq(i).find('.card-icon img').eq(j).attr('src');
          arr.push(obj);
        }
      }
      // 存入数据库
      superAdminMap.create(arr, function(err, doc) {
        console.log(err);
      });
    }
  });
}


async function main() {
  await reptile('http://chuangzaoshi.com/index', '设计-');
  await reptile('http://chuangzaoshi.com/code', '前端-');
  await reptile('http://chuangzaoshi.com/operate', '运营-');
  await reptile('http://chuangzaoshi.com/product', '产品-');
  await reptile('http://chuangzaoshi.com/job', '工作-');
  await reptile('http://chuangzaoshi.com/geek', '极客-');
}

main();
