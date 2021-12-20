<template>
  <div class="container card-about">
      <div class="vertically-centered">
        <img src="../assets/arnaud.jpeg" alt="Ma photo" class="img-circle" />
        <h1>Arnaud TAILLARD</h1>
        <h2 class="highlight"><span>Consultant indépendant</span></h2>
      </div>
      <div class="overview">
        Professionnel du milieu industriel de biens et de services, j'apporte mon aide et mon soutien à vos projets d'organisation ou de transition.
        Expert en gestion de Process, d'Organisation et d'Optimisation auprès des TPE, PME/PMI.
        Après une carrière en industries de process et de services, spécialisé dans le domaine de l'Hygiène, du monde de la Blanchisserie, je peux vous apporter :
        _Conseil,
        _Audit,
        _Aide à la restructuration ou au développement,
        _Pilotage de transitions,
        _Analyses d'équipes,
        _Aide à la certification (RABC)
        _Coaching d'encadrant

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
.card-about {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid rgb(235,235,235);
}
@media (max-width: 640px) {
  .card-about {
    flex-direction: column;
  }
}
.img-circle {
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin: 5px;
}
.vertically-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  flex: 1 1 0;
}
.overview {
  margin: auto;
  flex: 2 1 0;
}
.highlight>span {
  background-color:var(--light-gray);
  line-height:2;
}
</style>
