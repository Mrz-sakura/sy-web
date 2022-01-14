<template>
  <header id="sy-header">
    <div class="logo">
      <img @click="$router.push('/index')" src="@img/logo.png" alt="赛优">
    </div>
    <div>

    </div>
    <div>

    </div>
  </header>
</template>

<script>
export default {
  name: "page-header",
  data: () => ({}),
  mounted() {

  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#sy-header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: #FFFFFF;

  .logo > img {
    width: 250px;
    cursor: pointer;
  }
}
</style>