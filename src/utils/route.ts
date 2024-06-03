// list url route 小程序只支持https
type TYPE_PARAMS = { [key: string]: string }
export const handle_route_params = function (url: string, params?: TYPE_PARAMS) {
  if (!params || Object.keys(params).length === 0) return url
  // 有需要处理参数
  let count = 0
  for (let key in params) {
    const value: string = params[key]
    if (count === 0) {
      url = url + "?" + key + "=" + value
    } else {
      url = url + "&" + key + "=" + value
    }
    count++
  }
  return url
}

export const get_url_params = function (url: string) {
  try {
    const url_paramsArr = url.split("?")[1].split("&")
    const result: { [key: string]: string } = {}
    for (let i = 0; i < url_paramsArr.length; i++) {
      const param = url_paramsArr[i].split("=")
      const [key, value] = param
      result[key] = value
    }
    return result
  } catch (_) {
    return {}
  }
}

// tabbar 切换
export async function $routeTo_tabbar(path: string) {
  await new Promise<void>((resolve, reject) => {
    uni.switchTab({
      url: handle_route_params(path)
    })
    resolve() // resolve()之后，将会进入promise的组件内部的then回调，相当于返回true
  })
}
// 得到上一页路由信息
export function $last_routeInfo() {
  const pages = getCurrentPages() // 所有已有页面路由
  const beforePage = pages[pages.length - 2] // 上一页路由信息
  if (beforePage?.route) {
    const beforePagePath = beforePage.route // 上一页路由url 如果等于订单详情或售后详情则不请求接口
    // console.log(beforePagePath, 'before')
    return beforePagePath
  }
  return {}
}
//
export function $routeTo_webview(path: string, params?: TYPE_PARAMS) {
  //  #ifdef APP-PLUS
  return plus.runtime.openURL(path) // /* 当app时候使用uniapp的api跳转 */
  // #endif

  return uni.navigateTo({
    /* 当小程序时候开启webview页跳转 */
    // 小程序只支持网络网页，不支持本地html打开
    // 这里传的和跳转的还只是项目里对webView页面的定义地址，每个webView将要跳转的目标h5不一样，各自定义，不能接受传参形式，否则url里放置url了
    url: handle_route_params(path, params)
  })
}
export function $route_to(path: string, params?: TYPE_PARAMS) {
  return uni.navigateTo({
    url: handle_route_params(path, params)
  })
}
export function $route_redirect(path: string, params?: TYPE_PARAMS) {
  return uni.redirectTo({
    url: handle_route_params(path, params)
  })
}
export function $route_back(count: number = 1) {
  setTimeout(() => {
    uni.navigateBack({
      delta: count //返回层数，2则上上页
    })
  }, 1000)
}
export function $route_reLaunch(path: string, params?: TYPE_PARAMS) {
  return uni.reLaunch({
    url: handle_route_params(path, params)
  })
}
