import get from './get';
import pageCommon from './url_config';
const postData = pageCommon.commonArg();      //postData作为调用的公共请求参数
//高防包监控
export function getAllapi(params) {
  return get(pageCommon.portUrl, Object.assign(postData, params));
}
