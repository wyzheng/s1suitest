import { WebSearchPageConfig } from "../search-page/interfaces/web-search-page-config";
import {CaseCTx, WebSearchResponse} from "../search-page/interfaces/web-search-page";
import { PageExtend } from "../search-page/page-extend";


const defaultConfig: WebSearchPageConfig = {
  lang: 'zh_CN',
  fontRatio: 1,
  scene: 20,
  version: 80009788,
  qqFaceFolderPath: '',
  platform: 'iOS',
  netType: 'wifi',
  // here this param decided result page or not
  //混排
  type: 0,
  isHomePage: 1,
  query: ``,
  isSug: true,
  isLocalSug: true,
  sceneActionType: 1,
  sessionId: '',
  subSessionId: '',
  systemVersion: 0,
  wechatVersion: 1661206783,
  deviceName: '',
  deviceModel: '',
  imei: '',
  deviceBrand: 'Apple',
  ostype: '',
  isClientLoading: 1,
  isOverseaApp: 0,
  educationTab: 1
};


// 如果某些参数是undefined，就选择其默认值
export async function setup(query: string, scene = 20, uin: number, isSuperView = false, businessType = 0, page = "result") {
  let pageExtend = new PageExtend();
  defaultConfig.scene = scene;
  console.log(global.__TEMPLATE__);
  const stx: CaseCTx= {
    businessType: businessType, page: page, scene: scene, query:query
  }

  return await pageExtend.allocPage({
    pageCtx: stx,
    renderRemoteImage: false,
    device: 'iPhone 11 Pro Max',
    config: defaultConfig,
    context: "./asset/" + global.__TEMPLATE__,
    query: query,
    key: "1",
    uin: uin,
    isSuperview: isSuperView
  })
}