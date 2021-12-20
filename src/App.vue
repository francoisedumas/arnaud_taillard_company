<template>
  <NavBar />
  <About />
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { NavBar, Footer, About },
};
</script>
