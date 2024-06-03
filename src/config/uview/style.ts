import { $primary, $primaryVery } from "@/config/uview/color"

export const tabs = function () {
  const tabStyle = `height:76rpx;line-height:76rpx;font-size:32rpx;border-width:6px`
  return {
    active: `color: ${$primaryVery};border-bottom: 4px solid ${$primaryVery};` + tabStyle,
    inactive: `color:#999999;border-bottom: 4px solid #FFF;` + tabStyle,
    itemStyle: "width: calc((100% - 50px) / 2);height: 40px",
    stickyBg: "#FFF"
  }
}

export const cell = function () {
  return {
    width: "9rpx",
    height: "18rpx",
    "font-weight": "bold"
  }
}
