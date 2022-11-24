import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(`./pages/Home.vue`);
const PatientConnector = () => import(`./pages/PatientConnector.vue`);

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: `/`,
      name: `home`,
      component: Home,
    },
    {
      path: `/patient`,
      name: `patient`,
      component: PatientConnector,
    },
  ],
  mode: `history`,
});
