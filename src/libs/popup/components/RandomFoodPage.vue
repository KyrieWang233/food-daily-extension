<template>
  <div>
    <n-space vertical>
      <n-card class="card" size="small" hoverable>
        <n-radio-group
          v-model:value="optionValue"
          name="radiogroup"
          style="margin-left: 10px"
        >
          <n-space>
            <n-popover v-for="op in options" :key="op.value" trigger="hover">
              <template #trigger>
                <n-radio :value="op.value">
                  {{ op.label }}
                </n-radio>
              </template>
              在菜谱大全里试试运气
            </n-popover>
          </n-space>
        </n-radio-group>
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
          "
        >
          <n-avatar
            :size="80"
            src="https://i2.chuimg.com/e9f7e939a00b4107825e9ad5232759bc_3648w_2736h.jpg?imageView2/2/w/660/interlace/1/q/90"
          />
          <div style="margin-top: 5px">西冷牛排</div>
          <div style="margin-top: 10px">
            <n-space>
              <n-button type="info"> 试下运气~ </n-button>
              <n-button type="info">
                <template #icon>
                  <n-icon>
                    <StarIcon />
                  </n-icon>
                </template>
                加入书签
              </n-button>
            </n-space>
          </div>
        </div>
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
      optionValue: null,
      options: [
        {
          value: "a",
          label: "菜谱大全模式",
        },
        {
          value: "b",
          label: "极简模式",
        },
        {
          value: "c",
          label: "收藏模式",
        },
      ],
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
}
</style>