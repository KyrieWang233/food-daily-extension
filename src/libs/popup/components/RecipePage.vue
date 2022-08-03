<template>
  <div>
    <n-image
      class="food-image"
      width="350"
      height="200"
      object-fit="cover"
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    />
    <div class="food-title">
      <div class="title-font">{{ recipeItem.name }}</div>
      <!--                      <p>{{question.description}}</p>-->
      <div class="tag-contain" style="padding: 5px 0px; color: #909399">
        <!--Tag-->
        <PriceTag style="width: 1.3em; height: 1.3em; margin-right: 8px" />
        <n-tag
          class="food-tag"
          v-for="Tag in recipeItem.tags"
          :key="Tag"
          size="small"
          :bordered="false"
          type="info"
        >
          {{ Tag }}
        </n-tag>
      </div>
    </div>
    <n-card embedded :bordered="false" size="small" content-style="padding: 0;">
      <n-tabs type="bar" :tabs-padding="20" pane-style="padding: 20px;">
        <n-tab-pane name="要买什么呢">
          <n-row v-for="Material in recipeItem.material" :key="Material">
            <n-col v-for="item in Material" :key="item" :span="12">
              <n-checkbox> {{ item.mname }} : {{ item.amount }}</n-checkbox>
            </n-col>
          </n-row>

          <!-- <n-data-table
            :columns="columns"
            :data="recipeItem.material"
            :pagination="pagination"
            :bordered="false"
          /> -->
        </n-tab-pane>
        <n-tab-pane name="做法">
          <n-ol>
            <n-li v-for="pro in recipeItem.process" :key="pro">
              {{ pro.pcontent }}
            </n-li>
          </n-ol>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>
<script>
import MainHeader from "./Main/MainHeader.vue";
import ItemCard from "./Main/ItemCard.vue";
import PriceTag from "./Button/PriceTag.vue";
export default {
  components: { MainHeader, ItemCard, PriceTag },
  data() {
    return {
      currentDate: new Date(),
      columns: [
        {
          title: "食材",
          key: "mname",
        },
        {
          title: "份量",
          key: "amount",
        },
      ],
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
            { mname: "盐", amount: "1勺" },
            { mname: "鲍汁", amount: "1茶勺" },
          ],
          [
            { mname: "糖", amount: "适量" },
            { mname: "水淀粉", amount: "1勺" },
          ],
          [
            { mname: "大白菜", amount: "3片" },
            { mname: "菠菜", amount: "30g" },
          ],
          [
            { mname: "红萝卜", amount: "50g" },
            { mname: "彩椒", amount: "50g" },
          ],
        ],
        process: [
          {
            pcontent: "彩椒，红萝卜切丝",
            pic: "http://api.jisuapi.com/recipe/upload/20160719/162546_72503.jpg",
          },
          {
            pcontent: "白菜和菠菜飞水",
            pic: "http://api.jisuapi.com/recipe/upload/20160719/162546_29860.jpg",
          },
          {
            pcontent: "将蔬菜丝码在白菜叶上",
            pic: "http://api.jisuapi.com/recipe/upload/20160719/162546_92740.jpg",
          },
          {
            pcontent: "卷成卷",
            pic: "http://api.jisuapi.com/recipe/upload/20160719/162546_38394.jpg",
          },
          {
            pcontent: "切成段",
            pic: "http://api.jisuapi.com/recipe/upload/20160719/162546_26158.jpg",
          },
          {
            pcontent:
              "锅中放少许水，加入盐，鲍汁（蚝油），水淀粉，煮至汤汁粘稠",
            pic: "http://api.jisuapi.com/recipe/upload/20160719/162546_40907.jpg",
          },
          {
            pcontent: "浇在彩蔬卷上即可",
            pic: "http://api.jisuapi.com/recipe/upload/20160719/162546_40860.jpg",
          },
        ],
        tags: ["减肥", "咸香", "宴请", "抗氧化", "抗衰老", "私房菜", "聚会"],
      },
    };
  },
  created() {
    // fetch(
    //   "https://way.jd.com/jisuapi/detail?id=5&appkey=690108a57dddfe285d1cc5154c2f2146",
    //   { method: "get" }
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data.result);
    //     const result = data.result.result;
    //     this.recipeItem.id = result.id;
    //     this.recipeItem.name = result.name;
    //     this.recipeItem.content = result.content;
    //     this.recipeItem.cookingTime = result.cookingTime;
    //     this.recipeItem.picture = result.pic;
    //     this.recipeItem.material = result.material;
    //     this.recipeItem.process = result.process;
    //     this.recipeItem.tags = result.tag.split(",");
    //     console.log(recipeItem);
    //   });
  },
  method: {
    getRandomFood() {
      this.axios
        .get(
          "https://way.jd.com/jisuapi/detail?id=5&appkey=690108a57dddfe285d1cc5154c2f2146"
        )
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>
<style scoped>
.food-image {
  margin: 5px;
}

.food-title {
  margin-left: 10px;
  margin-top: 10px;
}

.tag-contain {
}
.food-tag {
  margin: 2px 2px;
}
.title-font {
  color: #606266;
  font-size: 16px;
  margin-top: 10px;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

/* card */
.n-card {
  width: 340px;
  margin: 0px 10px;
}

.n-tab-pane {
  width: auto;
}
</style>