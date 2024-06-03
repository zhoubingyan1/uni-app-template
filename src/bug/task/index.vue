<template>
  <u-sticky :bgColor="tabStyle().stickyBg">
    <u-tabs
      lineHeight="0"
      :itemStyle="tabStyle().itemStyle"
      :list="tabList"
      :activeStyle="tabStyle().active"
      :inactiveStyle="tabStyle().inactive"
      @click="tabClick"
      keyName="name"
      :scrollable="false"
    ></u-tabs>
  </u-sticky>

  <view class="list">
    <view v-for="item in 3" @click="$route_to()" class="item bg-white">
      <view class="status flex-center">可接单</view>
      <view class="title">这是一个标题</view>
      <view class="content">content</view>
      <view class="tag flex-center">react</view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { tabs as tabStyle } from "@/config/uview/style"
import { $route_to } from "@/utils/route"

interface INF_TAB_ITEM {
  name: string
}
const tabList = ref<INF_TAB_ITEM[]>([
  {
    name: "待接单"
  },
  {
    name: "进行中"
  },
  {
    name: "已完成"
  }
])

/** method */
const tabClick = function (item: INF_TAB_ITEM) {
  console.log(item.name, "ff")
}
</script>

<style lang="scss" scoped>
.list {
  padding: 30rpx 20rpx;
  .item {
    position: relative;
    margin-bottom: 30rpx;
    padding: 60rpx 30rpx 30rpx;

    .status {
      position: absolute;
      right: 0;
      top: 0;
      width: 120rpx;
      height: 60rpx;
      color: #ffffff;
      background: $primary;
    }
    .title {
      margin-bottom: 20rpx;
      font-size: 36rpx;
      font-weight: 500;
    }
    .content {
      margin-bottom: 30rpx;
      background: #eff7ff;
      padding: 20rpx;
      color: #333;
    }
    .tag {
      background: $primarySub;
      color: #ffffff;
      border: 2rpx solid $primarySub;
      padding: 6rpx;
      width: 100rpx;
    }
  }
}
</style>
