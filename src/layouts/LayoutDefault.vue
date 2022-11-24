<template>
  <div class="LayoutDefault">
    <Header />
    <main class="LayoutDefault__main">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: `LayoutDefault`,
  data() {
    return {
      user: "Esther",
    };
  },
  created() {
    // Simulate fetching user data.
    // setTimeout(() => {
    //   this.user = { name: `Esther` };
    // }, 2000);
  },
  components: {
    Header,
  }
};
</script>

<style lang="scss">
.LayoutDefault {
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
  background: linear-gradient(0deg, rgba(54, 131, 252, 0.03), rgba(54, 131, 252, 0.03)), linear-gradient(0deg, #FFFFFF, #FFFFFF);

  &__nav {
    border-radius: 0px;
    padding: 36px 64px 36px 64px;
    display: flex;
    justify-content: space-between;
  }

  &__user {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    &__name {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
      text-align: right;
    }

    &__avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }

  &__main {
    padding: 1.5em 64px 2em 64px;
  }

  &__footer {
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 1px solid #c0c0c0;
  }
}
</style>

