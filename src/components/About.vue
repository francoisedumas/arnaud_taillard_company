<template>
  <div class="container card">
      <div class="vertically-centered">
        <img src="../assets/arnaud.jpeg" alt="Ma photo" class="img-circle" />
        <h1>Arnaud TAILLARD</h1>
        <h2 class="highlight"><span>Consultant indépendant</span></h2>
      </div>
      <div class="overview">
        Professionnel du milieu industriel de biens et de services, j'apporte mon aide et mon soutien à vos projets d'organisation ou de transition.
        Expert en gestion de Process, d'Organisation et d'Optimisation auprès des TPE, PME/PMI.
        Avec une connaissance étendue des différents rouages d'une entreprise (Production Maintenance, Qualité, RH,...), mes interventions peuvent être transverses au sein de vos organisations.
      </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.img-circle {
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin: 5px;
}
</style>
