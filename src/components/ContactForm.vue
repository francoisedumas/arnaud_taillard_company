<template>
  <div class="contact">
    <form method="post" @submit.prevent="handleSubmit">
      <input type="hidden" name="form-name" value="ask-question" />
      <div>
        <label>Nom et prénom</label>
        <input
          type="text"
          name="name"
          @input="(ev) => (form.name = ev.target.value)"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          @input="(ev) => (form.email = ev.target.value)"
        />
      </div>

      <div>
        <label>Message</label>
        <textarea
          name="message"
          @input="(ev) => (form.message = ev.target.value)"
          placeholder="Votre message..."
        ></textarea>
      </div>

      <div>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "ask-question",
          ...this.form,
        }),
      })
        .then(() => {
          this.$router.push("/merci");
        })
        .catch(() => {
          this.$router.push("404");
        });
    },
  },
};
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 10px auto;
}
form {
  margin: 10px auto;
  max-width: auto;
}
textarea,
input {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid var(--secondary);
}
</style>
