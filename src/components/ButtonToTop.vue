<template>
  <i class="fas fa-caret-square-up bottom-right" @click="scrollTop" v-show="visible"></i>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeUnmount: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 30px;
  cursor: pointer;
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  color: var(--primary); /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  font-size: 50px; /* Increase font size */
  background-color: transparent;
}
.bottom-right:hover {
  color: var(--secondary);
}
</style>
