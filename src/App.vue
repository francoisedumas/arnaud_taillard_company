<template>
  <NavBar />
  <About />
  <Skills />
  <ButtonToTop />
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Footer from "./components/Footer.vue";
import ButtonToTop from "./components/ButtonToTop.vue";

export default {
  components: { NavBar, Footer, About, Skills, ButtonToTop },
};
</script>
