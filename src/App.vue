<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view />
  </div>
</template>
<script>
import PageHeader from "@com/page-header";

export default {
  components: { PageHeader }
};
</script>

