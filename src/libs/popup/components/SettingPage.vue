<template>
  <div>
    <n-space vertical>
      <div class="header">
        <n-button size="tiny" secondary type="info">返回首页</n-button>
        <div>设置</div>
        <div style="opacity: 0">占位容器</div>
      </div>
      <n-card class="card" size="small" hoverable>
        <n-space>
          <n-switch :value="active" />
          时间提醒开关
        </n-space>
        <n-time-picker
          style="margin-top: 20px"
          default-formatted-value="00:18:00"
        />
        <n-divider />
        <n-space>
          <n-switch :value="active" />
          鼠标右键选项开关
        </n-space>
        <n-divider />
        <n-h3>相关信息</n-h3>
        <n-ul>
          <n-li>项目简介:</n-li>
          <n-li>代码仓库:</n-li>
          <n-li>许可协议:</n-li>
        </n-ul>
      </n-card>
    </n-space>
  </div>
</template>
<script>
import { ElCheckbox } from "element-plus";
import ListEditIcon from "./Button/ListEditIcon.vue";
import StarIcon from "./Button/StarIcon.vue";
export default {
  components: { ElCheckbox, ListEditIcon, StarIcon },
  data() {
    return {
      activate: null,
      recipeItem: {
        id: 5,
        name: "翡翠彩蔬卷",
        content:
          "春天是为夏天做准备的刮油季，为了夏天能够美美的穿上漂亮的花裙子，让我们一起来狠狠的刮油吧。<br />这个色彩缤纷的彩蔬卷，低热量，高营养，是一道秀色可餐的减肥餐~",
        cookingTime: "10分钟",
        picture:
          "https://i2.chuimg.com/e9f7e939a00b4107825e9ad5232759bc_3648w_2736h.jpg?imageView2/2/w/660/interlace/1/q/90",
        material: [
          [
            { mname: "厚切西冷牛排3公分", amount: "430克" },
            { mname: "盐", amount: "少许" },
          ],
          [
            { mname: "黑胡椒（整粒）", amount: "少许" },
            { mname: "黄油", amount: "1块" },
          ],
          [
            { mname: "菜油", amount: "少许" },
            { mname: "菠菜", amount: "30g" },
          ],
          [
            { mname: "大蒜", amount: "一整头" },
            { mname: "迷迭香", amount: "" },
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
  margin-bottom: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>