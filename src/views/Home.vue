<template>
  <About />
  <Skills />
  <Contact />
  <ButtonToTop />
</template>

<script>
import ButtonToTop from "../components/ButtonToTop.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "Acceuil",
  components: {  About, Skills, ButtonToTop, Contact },
};
</script>

<style scoped>

</style>
