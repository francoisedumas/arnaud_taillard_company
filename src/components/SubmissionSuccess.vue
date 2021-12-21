<template>
  <div class="container">
    <h1>Merci pour votre message je reprendrai contact avec vous le plus vite possible!</h1>
    <router-link :to="{ name: 'Acceuil' }">
      <button>Retour à l'acceuil</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubmissionSuccess",
};
</script>
