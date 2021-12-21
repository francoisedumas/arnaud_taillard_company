<template>
  <div class="container card">
    <div class="vertically-centered">
      <h2 class="highlight"><span>Email envoyé!</span></h2>
    </div>
    <div class="overview vertically-centered">
      <p>Merci pour votre message je reprendrai contact avec vous le plus vite possible!</p>
      <router-link :to="{ name: 'Acceuil' }">
        <button>Retour à l'acceuil</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmissionSuccess",
};
</script>
