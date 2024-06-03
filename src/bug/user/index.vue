<template>
  <!-- 描述 -->
  <view class="desc">
    <view class="top justify-between align-center">
      <view>22</view>
      <view class="shift">1</view>
    </view>
    <view class="bottom justify-between">
      <text>账号：</text>
      <view class="align-center">
        <text class="switch">切换酒店</text>
      </view>
    </view>
  </view>
  <!-- 到期信息 -->
  <view class="expirationInformation justify-between">
    <text>到期</text>
    <text>修改密码</text>
  </view>

  <u-cell-group
    :customStyle="{
      'font-size': '32rpx',
      'font-family': 'SourceHanSansCN-Regular-, SourceHanSansCN-Regular',
      'background-color': '#fff'
    }"
    :border="false"
  >
    <u-cell
      v-for="item in cellList"
      :key="item.title"
      clickable
      :title="item.title"
      isLink
      :url="item.url"
      :rightIconStyle="cellStyle()"
    >
      <template #icon>
        <u-icon size="32" :name="item.icon"></u-icon>
      </template>
    </u-cell>
  </u-cell-group>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { cell as cellStyle } from "@/config/uview/style"
import bugRouter from "@/router/bug/routes"

interface INF_CELL {
  title: string
  url: string
  icon: string
}
const { suggest, task, rules, demand } = bugRouter.user
const cellList = ref<INF_CELL[]>([
  { title: "我的任务", url: task, icon: "calendar" },
  { title: "我的需求", url: demand, icon: "order" },
  { title: "意见反馈", url: suggest, icon: "email" },
  { title: "规则说明", url: rules, icon: "question-circle" }
])
</script>

<style lang="scss" scoped>
page {
  padding: 20rpx;
}
.desc {
  height: 140rpx;
  padding: 54rpx 32rpx 0 32rpx;
  color: #ffffff;
  background: linear-gradient(#72c452, #b7d0ad);
  border-radius: 16rpx 16rpx 0rpx 0rpx;
  .top {
    font-size: 36rpx;
    margin-bottom: 10rpx;
    .shift {
      font-size: 24rpx;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN-Regular;
    }
  }
  .bottom {
    font-size: 24rpx;
    font-family:
      Source Han Sans CN-Regular,
      Source Han Sans CN,
      serif;
  }
}
.expirationInformation {
  background-color: #fff;
  padding: 0 32rpx 0;
  height: 78rpx;
  line-height: 78rpx;
  color: #94999c;
  font-size: 24rpx;
  margin-bottom: 20rpx;
}
.switch {
  font-family:
    Source Han Sans CN,
    Source Han Sans CN;
}
</style>
