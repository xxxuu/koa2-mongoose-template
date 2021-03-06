const urlOperationBiz = require('../business/biz_page_url_operation.js');
const logger = require('../comm_unit/log4js.js');
var query = async(ctx,next)=>{
    logger.debug(ctx.request.body);
    const returnData = await urlOperationBiz.findOne(ctx.request.body);
    ctx.response.type = 'application/json';
    ctx.response.body = returnData
};

module.exports = {
    'POST /url_operation/query/': query
};