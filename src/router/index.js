import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SubmissionSuccess from '../components/SubmissionSuccess'
import SubmissionFail from '../components/SubmissionFail'

const routes = [
  {
    path: "/",
    name: "Acceuil",
    component: Home,
    meta: {
      title: "Bienvenu sur le site d'Arnaud TAILLARD, consultant indépendant expert en gestion de Process, d'Organisation et d'Optimisation",
    },
  },
  {
    path: "/merci",
    name: "Merci",
    component: SubmissionSuccess,
    meta: {
      title: "Merci pour votre message!",
    },
  },
  {
    path: "/404",
    name: "fail",
    component: SubmissionFail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
