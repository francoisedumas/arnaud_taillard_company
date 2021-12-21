<template>
  <div class="container card-about">
      <div class="vertically-centered">
        <h2 class="highlight"><span>Contact</span></h2>
      </div>
      <div class="overview">
        <ContactForm />
      </div>
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";

export default {
  name: 'Contact',
  components: { ContactForm },
};
</script>

<style scoped>
</style>
