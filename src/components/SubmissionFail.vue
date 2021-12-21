<template>
  <div class="container card">
    <div class="vertically-centered">
      <h2 class="highlight"><span>Erreur</span></h2>
    </div>
    <div class="overview vertically-centered">
      <p>Oops, quelque chose c'est mal passé!</p>
      <router-link :to="{ name: 'Acceuil' }">
        <button>Retour à l'acceuil</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmissionFail",
};
</script>
