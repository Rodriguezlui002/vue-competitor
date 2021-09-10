<template>
  <div>
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
}
</script>