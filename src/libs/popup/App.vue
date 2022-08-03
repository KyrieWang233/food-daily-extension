<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="main">
      <div v-if="!isRecipeList&&!isSettingPage">
        <swiper
          ref="mySwiper"
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :navigation="true"
          pagination
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>下班记得买菜</swiper-slide>
          <swiper-slide>试试好运</swiper-slide>
          <swiper-slide>本周计划</swiper-slide>
        </swiper>
        <IndexPage v-if="activePage === 0" />
        <RandomFoodPage v-else-if="activePage == 1" />
        <WeekPlan v-else-if="activePage === 2" />
        <div class="bottom">
          <n-icon size="20">
            <FoodIcon />
          </n-icon>
          <div>
            <n-button strong secondary type="info" @click="openRecipeList">
              我的菜谱
            </n-button>
          </div>
          <n-button text @click="openSettingPage">
            <n-icon size="20">
              <SettingIcon />
            </n-icon>
          </n-button>
        </div>
      </div>
      <div v-else-if="isRecipeList">
        <RecipeList />
      </div>
      <div v-else-if="isSettingPage">
        <SettingPage />
      </div>
    </div>
  </n-config-provider>
</template>
<script>
import { NConfigProvider } from "naive-ui";
import MainPage from "./components/RecipePage.vue";
import FoodIcon from "./components/Button/FoodIcon.vue";
import ArrowRight from "./components/Button/ArrowRight.vue";
import ArrowLeft from "./components/Button/ArrowLeft.vue";
import WeekPlan from "./components/WeekPlan.vue";
// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css"; // 整个轮播图的样式
import "swiper/css/navigation"; // 左右按钮的样式
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Index from "./components/IndexPage.vue";
import IndexPage from "./components/IndexPage.vue";
import SettingIcon from "./components/Button/SettingIcon.vue";
import RecipeList from "./components/RecipeList.vue";
import RandomFoodPage from "./components/RandomFoodPage.vue";
import SettingPage from "./components/SettingPage.vue";
export default {
  components: {
    MainPage,
    FoodIcon,
    ArrowRight,
    ArrowLeft,
    Swiper,
    SwiperSlide,
    WeekPlan,
    Index,
    IndexPage,
    SettingIcon,
    RecipeList,
    RandomFoodPage,
    SettingPage
},
  data() {
    return {
      activePage: 0,
      isRecipeList: false,
      isSettingPage: false,
      modules: [Navigation, Pagination],
      /**
       * js 文件下使用这个做类型提示
       * @type import('naive-ui').GlobalThemeOverrides
       */
      themeOverrides: {
        common: {
          primaryColor: "#2d8cf0",
          primaryColorHover: "#2d8cf0",
          primaryColorPressed: "#1060c9",
          primaryColorSuppl: "#1060c9",
        },
        Button: {
          textColor: "#2d8cf0",
          textColorTextHover: "#2d8cf0",
          textColorTextPressed: "#1060c9",
          textColorTextFocus: "#2d8cf0",
        },
        Select: {
          peers: {
            InternalSelection: {
              textColor: "#2d8cf0",
            },
          },
        },
      },
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      this.activePage = document.querySelector(".swiper").swiper.activeIndex;
      console.log(document.querySelector(".swiper").swiper.activeIndex);
    },
    openRecipeList() {
      this.isRecipeList = true;
    },
    openSettingPage() {
      this.isSettingPage = true;
    }
  },
};
</script>
<style scoped>
.main {
  width: 400px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom {
  text-align: center;
  justify-content: space-between;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.swiper {
  margin-top: 5px;
  width: 100%;
  height: 100%;
  --swiper-navigation-size: 16px; /* 设置按钮大小 默认是44px */
}

.swiper-slide {
  text-align: center;
  font-size: 14px;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper::v-deep .swiper-button-next,
.swiper::v-deep .swiper-button-prev {
  top: 31%;
}

.swiper::v-deep .swiper-pagination {
  position: relative;
}
.swiper::v-deep .swiper-pagination-horizontal {
  bottom: 0px;
  width: 60%;
  left: 20%;
  height: 10px;
}
.swiper::v-deep .swiper-pagination .swiper-pagination-bullet {
  background: #c0c4cc;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  margin: 0 4px 10px 4px;
  display: inline-block;
  transition: width 0.3s;
}

.swiper::v-deep .swiper-pagination .swiper-pagination-bullet-active {
  background: #c0c4cc;
  display: inline-block;
  width: 20px;
  height: 3px;
  margin-bottom: 10.5px;
  border-radius: 4px;
}
</style>