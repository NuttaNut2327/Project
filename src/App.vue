<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script>
import Main from "@/layouts/main.vue";
import Default from "@/layouts/default.vue";
export default {
  components: {
    Main,
    Default
  },
  computed:{
    layout() {
      console.log(this.$route);
      return this.$route.meta.layout || Default;
    },
  },
};
</script>

