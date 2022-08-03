<template>
  <div class="header">
    <img
      style="width: 40px; height: 40px"
      src="@/assets/images/food128.png"
      alt=""
    />
    <h1 class="text-xl font-bold text-gray-800">吃点好的吧</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
}

.font-bold {
  font-weight: 700;
}

.text-xl {
  font-size: 1.25rem;
}
</style>