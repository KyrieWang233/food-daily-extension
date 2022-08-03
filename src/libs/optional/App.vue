<template>
  <n-theme-editor>
    <HelloPopup />
  </n-theme-editor>
</template>
<script>
import HelloPopup from "./components/HelloPopup.vue";
import { defineComponent } from "vue";
import { NThemeEditor } from "naive-ui";

export default defineComponent({
  components: {
    NThemeEditor,
  },
});
</script>
<style scoped></style>
