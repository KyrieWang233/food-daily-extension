<template>
  <div>
    <n-space vertical>
      <n-card
        v-for="week in weeks"
        :key="week"
        class="week-card"
        :title="week"
        size="small"
        :header-style="currentWeek === week ? activeHeader : cardHeader"
        :content-style="currentWeek === week ? activeContent : cardContent"
      >
        <template #header-extra>
          <n-button text>
            <n-icon size="20">
              <ListEditIcon />
            </n-icon>
          </n-button>
        </template>
        <div class="week-content">
          <div style="display: flex; align-items: center">
            <div class="text-time">早餐</div>
            <div style="display: flex; flex-direction: column">
              <span v-if="currentWeek === week">麦片</span>
              <span v-else>牛奶</span>
            </div>
          </div>
          <div style="display: flex; align-items: center">
            <div class="text-time">午餐</div>
            <div style="display: flex; flex-direction: column">
              <span v-if="currentWeek === week">西冷牛排</span>
              <span v-else>翡翠彩蔬卷</span>
            </div>
          </div>
          <div style="display: flex; align-items: center">
            <div class="text-time">晚餐</div>
            <div style="display: flex; flex-direction: column">
              <span v-if="currentWeek === week">胡萝卜</span>
              <span v-else>蔬菜沙拉</span>
              <span>玉米</span>
            </div>
          </div>
        </div>
      </n-card>
    </n-space>
  </div>
</template>
<script>
import ListEditIcon from "./Button/ListEditIcon.vue";
export default {
  data() {
    return {
      weeks: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      currentWeek: "周四",
      activeHeader:
        "border-top-left-radius: 15px;border-top-right-radius: 15px;background:#4d9ff4;--n-title-text-color: white;padding: 8px 10px 5px 10px;",
      activeContent:
        "border-bottom-left-radius: 15px;border-bottom-right-radius: 15px;background:#c0def3;padding:6px 10px 6px 10px;",
      cardHeader:
        "border-top-left-radius: 15px;border-top-right-radius: 15px;background:#b2bbc6;padding: 8px 10px 5px 10px;",
      cardContent:
        "border-bottom-left-radius: 15px;border-bottom-right-radius: 15px;padding:6px 10px 6px 10px;",
    };
  },
  components: { ListEditIcon },
};
</script>
<style scoped>
.week-card {
  border-radius: 16px;
  left: 4%;
  width: 92%;
}
.week-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
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