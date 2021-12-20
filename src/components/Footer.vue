<template>
  <footer>
    <a href="https://github.com/francoisedumas" alt="Github" target="_blank">
      <i class="fab fa-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/arnaud-taillard/"
      alt="Linkedin"
      target="_blank"
    >
      <i class="fab fa-linkedin"></i>
    </a>
    <p>Made with <i class="fas fa-heart"></i> in Nantes! by FDLab</p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  border-top: 1px dashed black;
}
footer a {
  color: black;
  font-size: 30px;
}
footer a:hover {
  color: var(--primary);
}
.fa-heart {
  color: var(--red);
}
</style>
