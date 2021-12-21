<template>
  <footer>
    <a
      href="https://www.linkedin.com/in/arnaud-taillard/"
      alt="Linkedin"
      target="_blank"
    >
      <i class="fab fa-linkedin"></i>
    </a>
    <div class="horizontally-aligned">
      <p>Made with <i class="fas fa-heart"></i> in Nantes</p>
      &nbsp;
      <a
        href="https://www.fdlab.me"
        alt="Linkedin"
        target="_blank"
      >by FDLab</a>
    </div>
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
footer .fab {
  color: black;
  font-size: 30px;
}
footer a:hover {
  color: var(--secondary);
}
.fa-heart {
  color: var(--red);
}
.horizontally-aligned {
  display: flex;
  justify-content: flex-start;
}
</style>
