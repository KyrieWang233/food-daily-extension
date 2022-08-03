<template>
  <div>
    <n-space vertical>
      <n-card class="card" title="🍙 用餐计划" size="small" hoverable>
        <div class="day-text">今天-周四</div>
        <div class="week-content">
          <div style="display: flex; align-items: center">
            <div class="text-time">早餐</div>
            <div style="display: flex; flex-direction: column">
              <span>麦片</span>
            </div>
          </div>
          <div style="display: flex; align-items: center">
            <div class="text-time">午餐</div>
            <div style="display: flex; flex-direction: column">
              <span>西冷牛排</span>
            </div>
          </div>
          <div style="display: flex; align-items: center">
            <div class="text-time">晚餐</div>
            <div style="display: flex; flex-direction: column">
              <span>胡萝卜</span> <span>玉米</span>
            </div>
          </div>
        </div>
        <n-divider />
        <div class="day-text">明天-周五</div>
        <div class="week-content">
          <div style="display: flex; align-items: center">
            <div class="text-time">早餐</div>
            <div style="display: flex; flex-direction: column">
              <span>牛奶</span>
            </div>
          </div>
          <div style="display: flex; align-items: center">
            <div class="text-time">午餐</div>
            <div style="display: flex; flex-direction: column">
              <span>翡翠彩蔬卷</span>
            </div>
          </div>
          <div style="display: flex; align-items: center">
            <div class="text-time">晚餐</div>
            <div style="display: flex; flex-direction: column">
              <span>蔬菜沙拉</span> <span>玉米</span>
            </div>
          </div>
        </div>
      </n-card>
      <n-card class="card" title="✔️ 食材清单" size="small" hoverable>
        <template #header-extra>
          <n-button text>
              <n-icon size="20">
                <ListEditIcon />
              </n-icon>
          </n-button>
        </template>
        <n-row v-for="Material in recipeItem.material" :key="Material">
          <n-col v-for="item in Material" :key="item" :span="12">
            <el-checkbox v-model="checked1">
              {{ item.mname }} {{item.amount }}</el-checkbox
            >
          </n-col>
        </n-row>
        <div></div>
      </n-card>
    </n-space>
  </div>
</template>
<script>
import { ElCheckbox } from "element-plus";
import ListEditIcon from "./Button/ListEditIcon.vue";
export default {
  components: { ElCheckbox, ListEditIcon },
  data() {
    return {
      recipeItem: {
        id: 5,
        name: "翡翠彩蔬卷",
        content:
          "春天是为夏天做准备的刮油季，为了夏天能够美美的穿上漂亮的花裙子，让我们一起来狠狠的刮油吧。<br />这个色彩缤纷的彩蔬卷，低热量，高营养，是一道秀色可餐的减肥餐~",
        cookingTime: "10分钟",
        picture:
          "http://api.jisuapi.com/recipe/upload/20160719/115138_19423.jpg",
        material: [
          [
            { mname: "西冷牛排", amount: ": 430克" },
            { mname: "盐", amount: ": 少许" },
          ],
          [
            { mname: "黑胡椒", amount: ": 少许" },
            { mname: "黄油", amount: ": 1块" },
          ],
          [
            { mname: "菜油", amount: ": 少许" },
            { mname: "菠菜", amount: ": 30g" },
          ],
          [
            { mname: "大蒜", amount: ": 一整头" },
            { mname: "迷迭香", amount: ": 一株" },
          ],
          [
            { mname: "玉米", amount: "" },
          ],
        ],
      },
    };
  },
};
</script>
<style scoped>
.card {
  border-radius: 16px;
  left: 4%;
  width: 92%;
}
.week-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.day-text {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
}
.n-divider:not(.n-divider--vertical) {
  margin-top: 10px;
  margin-bottom: 10px;
}
.text-time {
  padding-right: 0.5rem;
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1rem;
}
</style>