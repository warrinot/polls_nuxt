<template>
  <section>
    <h1 class="title">Login page</h1>
    <div class="auth-form">
      <b-field label="User">
        <b-input v-model="user.username" type="text" />
      </b-field>
      <b-field label="Password">
        <b-input v-model="user.password" type="password" />
      </b-field>
      <b-button class="is-primary" @click="login">Login</b-button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.user,
        })
        this.$toasted.global.defaultSuccess({
          msg: 'User logged in succesfully',
        })
      } catch (err) {
        this.$toasted.global.defaultError({
          msg: 'Login error!',
        })
      }
    },
  },
}
</script>
