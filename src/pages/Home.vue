<!-- Patient connector -->

<template>
  <layout-default>
    <div class="Developer">
      <div class="Developer__Title">
        <div class="main">Developer</div>
        <div class="sub">API Access tokens and seurity, Usage details</div>
      </div>
      <div class="Developer__accessType">
        <div class="Developer__accessTypeHead">
          <div class="Developer__nav">
            <button v-bind:class="{ active: isActive === 0 }" class="Developer__nav__btn"
              @click="isActive = 0">Statistics</button>
            <button v-bind:class="{ active: isActive === 1 }" class="Developer__nav__btn"
              @click="isActive = 1">Models</button>
            <button v-bind:class="{ active: isActive === 2 }" class="Developer__nav__btn"
              @click="isActive = 2">Keys</button>
          </div>
        </div>
      </div>
      <component v-bind:is="currentComponent" />
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import Chart from '../components/Chart.vue';
import Usage from '../components/Usage.vue';
import Keys from '../components/Keys.vue';

export default {
  name: `Developer`,
  data() {
    return {
      isActive: 0,
      checked: false,
    }
  },
  components: {
    LayoutDefault,
    Chart,
    Usage,
    Keys,
  },
  computed: {
    currentComponent() {
      return this.isActive == 0 ? 'Usage' : 'Keys'
    }
  },
  created() {
    document.title = "Developer portal"
  }
};
</script>

<style lang="scss">
@import '../assets/css/developer.scss';
</style>