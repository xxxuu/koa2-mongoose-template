/*
*
* @controller pageurl 负责处理 由各个网站的下载页面地址
* */
const logger = require('../comm_unit/log4js.js');
const getPageUrlList = require('../crawler/cra_page_url.js');
const ResultData = require('../comm_unit/data_structure.js').ResultData;
const crawler = async(ctx,next)=>{
    logger.info(ctx.request.body);
    //TODO  判断爬虫是否正在操作
    getPageUrlList(); // 不采用同步方式返回数据 将操作数据记录在中间表中 通过前端轮询查看进度
    let returnData    = new ResultData();
    returnData.setStatus(1);
    returnData.setData({});
    returnData.setMessage("后台爬虫已启动");
    ctx.response.type = 'application/json';
    ctx.response.body = returnData;
};

module.exports = {
    'POST /page_url/crawler/': crawler
};