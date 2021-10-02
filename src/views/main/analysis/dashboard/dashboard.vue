<template>
  <!-- 顶部数据 -->
  <el-row :gutter="10">
    <template v-for="item in goodsAmountList" :key="item.amount">
      <el-col :md="12" :lg="6" :xl="6">
        <StatisticalPanel :panelData="item"></StatisticalPanel>
      </el-col>
    </template>
  </el-row>
  <!-- 中间图表 -->
  <el-row :gutter="10">
    <el-col v-bind="reactiveCol">
      <base-card title="分类商品数量(饼图) ">
        <PieEchart :data="pieData" />
      </base-card>
    </el-col>
    <!-- <el-col v-bind="reactiveCol">
      <MapEchart :mapData="mapData" />
    </el-col> -->
    <el-col v-bind="reactiveCol">
      <base-card title="分类商品数量(玫瑰图)">
        <RoseEchart :roseData="pieData" />
      </base-card>
    </el-col>
  </el-row>
  <!-- 下面图表 -->
  <el-row :gutter="10" :style="{ marginTop: '20px' }">
    <el-col :md="12">
      <base-card title="分类商品的销量">
        <LineEchart v-bind="lineData" />
      </base-card>
    </el-col>
    <el-col :md="12">
      <base-card title="分类商品的收藏">
        <BarEchart v-bind="barData" />
      </base-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import dashboardStore from '@/store/modules/dashboard'
import { mapState } from 'pinia'
import BaseCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart
  // MapEchart
} from '@/components/page-echarts'
import StatisticalPanel from '@/components/statistical-panel'
const reactiveCol = {
  xl: 12,
  lg: 12,
  md: 12,
  sm: 24
}
export default defineComponent({
  name: 'dashboard',
  components: {
    BaseCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    StatisticalPanel,
    BarEchart
    // MapEchart
  },
  setup() {
    const store = dashboardStore()
    store.refreshCatrgoryData()
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    const pieData = computed(() => {
      return store.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const lineData = computed(() => {
      const labels = store.categoryGoodsSale.map((item: any) => item.name)
      const values = store.categoryGoodsSale.map((item: any) => item.goodsCount)
      return { labels, values }
    })
    const barData = computed(() => {
      const labels = store.categoryGoodsFavor.map((item: any) => item.name)
      const values = store.categoryGoodsFavor.map(
        (item: any) => item.goodsFavor
      )
      return { labels, values }
    })
    const mapData = computed(() => {
      const temp = store.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
      return temp
    })
    return { option, pieData, reactiveCol, lineData, barData, mapData }
  },
  computed: {
    ...mapState(dashboardStore, [
      'categoryGoodsCount',
      'goodsAmountList',
      'categoryGoodsSale'
    ])
  }
})
</script>

<style scoped></style>
