<template>
  <div class="banner">
    <img src="../assets/landscape.jpeg" alt="Arnaud Taillard une vision pour votre projet" style="width:100%;">
    <div class="top-left">
      <img class="img-logo" src="../assets/logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  position: relative;
  color: white;
  background-size: cover;
  clip-path: rect(10px, 20px, 30px, 40px);
}
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}
.img-logo {
  height: 50px;
  width: 50px;
  margin: 5px;
}
</style>
