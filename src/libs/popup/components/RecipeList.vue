<template>
  <div>
    <div class="header">
      <n-button size="tiny" secondary type="info">返回首页</n-button>
      <div>我的菜谱列表</div>
      <n-button size="tiny" secondary type="info">
        <template #icon>
          <n-icon>
            <PlusIcon />
          </n-icon>
        </template>
        插入
      </n-button>
    </div>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%;margin-top:10px;"
    >
      <el-table-column label="图片">
        <template #default="scope">
          <n-avatar :size="48" :src="scope.row.picture" />
        </template>
      </el-table-column>
      <el-table-column label="菜名" prop="name"> </el-table-column>
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <n-pagination :page="page" :page-count="1" :page-slot="7" />
  </div>
</template>
<script>
import { ElTable, ElInput, ElButton, ElTableColumn } from "element-plus";
import PlusIcon from "./Button/PlusIcon.vue";
export default {
  components: { ElTable, ElInput, ElButton, ElTableColumn, PlusIcon },
  data() {
    return {
      page: 1,
      recipeItem: {
        id: 5,
        name: "西冷牛排",
        content:
          "春天是为夏天做准备的刮油季，为了夏天能够美美的穿上漂亮的花裙子，让我们一起来狠狠的刮油吧。<br />这个色彩缤纷的彩蔬卷，低热量，高营养，是一道秀色可餐的减肥餐~",
        cookingTime: "10分钟",
        picture:
          "https://i2.chuimg.com/e9f7e939a00b4107825e9ad5232759bc_3648w_2736h.jpg?imageView2/2/w/660/interlace/1/q/90",
      },
      tableData: [
        {
          id: 5,
          name: "西冷牛排",
          content:
            "春天是为夏天做准备的刮油季，为了夏天能够美美的穿上漂亮的花裙子，让我们一起来狠狠的刮油吧。<br />这个色彩缤纷的彩蔬卷，低热量，高营养，是一道秀色可餐的减肥餐~",
          cookingTime: "10分钟",
          picture:
            "https://i2.chuimg.com/e9f7e939a00b4107825e9ad5232759bc_3648w_2736h.jpg?imageView2/2/w/660/interlace/1/q/90",
        },
        {
          id: 5,
          name: "西冷牛排",
          content:
            "春天是为夏天做准备的刮油季，为了夏天能够美美的穿上漂亮的花裙子，让我们一起来狠狠的刮油吧。<br />这个色彩缤纷的彩蔬卷，低热量，高营养，是一道秀色可餐的减肥餐~",
          cookingTime: "10分钟",
          picture:
            "https://i2.chuimg.com/e9f7e939a00b4107825e9ad5232759bc_3648w_2736h.jpg?imageView2/2/w/660/interlace/1/q/90",
        },
        {
          id: 5,
          name: "西冷牛排",
          content:
            "春天是为夏天做准备的刮油季，为了夏天能够美美的穿上漂亮的花裙子，让我们一起来狠狠的刮油吧。<br />这个色彩缤纷的彩蔬卷，低热量，高营养，是一道秀色可餐的减肥餐~",
          cookingTime: "10分钟",
          picture:
            "https://i2.chuimg.com/e9f7e939a00b4107825e9ad5232759bc_3648w_2736h.jpg?imageView2/2/w/660/interlace/1/q/90",
        },
        {
          id: 5,
          name: "汉堡",
          content:
            "春天是为夏天做准备的刮油季，为了夏天能够美美的穿上漂亮的花裙子，让我们一起来狠狠的刮油吧。<br />这个色彩缤纷的彩蔬卷，低热量，高营养，是一道秀色可餐的减肥餐~",
          cookingTime: "10分钟",
          picture:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        },
      ],
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/deep/ .el-table th.el-table__cell {
  background-color: #f7f9f8;
}
.n-pagination {
  justify-content: center;
  margin-top: 10px;
}
.card-text {
  display: flex;
  align-items: center;
}
.day-text {
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