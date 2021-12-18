<template>
  <div class="bg-image h-full w-full">
    <!-- <div class=" /> -->
    <div class="flex justify-center items-center h-full w-full">
      <v-card class="w-3/4 md:w-2/4 lg:w-2/6 xl:1/6 max-w-lg pb-4">
        <v-card-title class="justify-center"> Anmeldung </v-card-title>
        <v-card-subtitle class="text-center">
          Bitte melde dich an um fortzufahren!
        </v-card-subtitle>
        <v-card-text>
          <div class="px-4">
            <v-form ref="form">
              <v-text-field
                outlined
                clearable
                autofocus
                label="E-Mail:"
                :hide-details="isTouched ? 'auto' : true"
                type="mail"
                :rules="[validateRequired, validateEmail]"
                v-model="email"
              ></v-text-field>
              <v-text-field
                outlined
                label="Passwort:"
                :hide-details="isTouched ? 'auto' : true"
                class="mt-2"
                :rules="[validatePassword]"
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
            <div class="mt-5">
              <v-btn color="primary" block @click="onSignInClick"
                >Anmelden</v-btn
              >
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { validateRequired, validateEmail } from '@/helpers/validation'

export default defineComponent({
  layout: 'blank',
  mounted() {
    console.log()
  },
  data() {
    return {
      showPassword: false,
      isTouched: false,
      password: '',
      email: '',
    }
  },
  methods: {
    onSignInClick() {
      this.isTouched = true
      // this.$refs.form.validate()
    },
    validatePassword(value: string) {
      return validateRequired(value, {
        message: 'Bitte geben Sie ein Passwort ein!',
      })
    },
    validateEmail,
    validateRequired,
  },
  computed: {
    isLoading() {
      return this.$store.getters['global/isLoading'] as boolean
    },
  },
})
</script>

<style scoped>
.bg-image {
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url('~/assets/images/auth_background.jpg');
  background-size: cover;
}
</style>
