<template>
  <div class="loginView flex place-items-center gap-7">
    <!-- Form side -->
    <div class="w-full flex flex-col gap-3 justify-evenly items-center">
      <h1 class="px-6 text-slate-100 self-center font-bold text-3xl">SolarBoard</h1>
      <!-- Login -->
      <div class="sm:w-2/4 lg:w-4/12 w-4/5 flex justify-center flex-col">
        <div class="shadow-lg px-6 py-5 lg:py-10 w-full rounded-lg self-center bg-white flex flex-col gap-3 mb-3">
          <h1 class="text-3xl text-center text-slate-800 font-bold mb-3">Welcome Back</h1>
          <div class="flex flex-col lg:flex-row gap-2 w-full">
            <button class="flex w-full lg:w-1/2" id="googleLogin" @click="GoogleSignIn">
              <div
                class="flex w-full h-7 justify-center px-1 py-5 gap-2 border-gray-200 rounded-md border text-gray-500 bg-white transition-all hover:bg-gray-200 items-center">
                <svg class="w-5 h-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_13183_10121)">
                    <path
                      d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                      fill="#3F83F8"></path>
                    <path
                      d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                      fill="#34A853"></path>
                    <path
                      d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                      fill="#FBBC04"></path>
                    <path
                      d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                      fill="#EA4335"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_13183_10121">
                      <rect width="20" height="20" fill="white" transform="translate(0.5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p>Sign in with Google</p>
              </div>
            </button>
            <button class="flex w-full lg:w-1/2" @click="GithubSignIn">
              <div
                class="flex w-full h-7 justify-center px-1 py-5 gap-2 border-gray-200 rounded-md border text-gray-500 bg-white transition-all hover:bg-gray-200 items-center">
                <svg class="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="text-slate-800"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <p>Sign in with Github</p>
              </div>
            </button>
          </div>
          <div class="text-center inline-flex justify-center items-center w-full">
            <hr class="my-4 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <span class="absolute px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">or</span>
          </div>
          <form @submit="EmailSign" method="post">
            <!-- input Email -->
            <div class="flex flex-col mb-2">
              <label for="clientEmail">Email</label>
              <input v-if="ErrorMessage"
                class="text-red-500 block w-full p-2.5 target:bg-red-200 bg-red-200 focus:bg-gray-50 focus:text-gray-900 border-red-400 text-sm rounded-lg border"
                placeholder="example@solar.com" type="email" name="emailValue" id="clientEmail"
                autocomplete="current-email" />
              <input v-else
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5"
                placeholder="example@solar.com" type="email" name="emailValue" id="clientEmail"
                autocomplete="current-email" />
            </div>
            <!-- Input Password -->
            <div class="flex flex-col mb-2">
              <label for="clientPass">Password</label>
              <input v-if="ErrorMessage" id="clientPass" autocomplete="current-pass"
                class=" text-red-500 block w-full p-2.5 target:bg-red-200 bg-red-200 focus:text-gray-900 border-red-400 focus:bg-gray-50 text-sm rounded-lg border"
                placeholder="Email" type="password" name="password" />
              <input v-else id="clientPass" autocomplete="current-pass"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email" type="password" name="password" />
            </div>
            <button
              class="bg-slate-800 text-center text-white hover:bg-slate-900 transition-all w-full px-5 py-2 rounded-md mt-2"
              type="submit" id="mailLogin">
              Sign in
            </button>
            <p class="my-3 mx-1 text-red-800" v-if="ErrorMessage">{{ errMsg }}</p>
          </form>
        </div>
        <router-link to="/register" class="text-white  justify-center self-center underline" href="">Don't have an account
          yet? Sign Up</router-link>
      </div>
      <!-- Social Media -->
      <a target="_blank" class="text-white flex gap-2 hover:underline"
        href="https://github.com/Sergioaorozco/SolarDashboard">
        <p>Check out the Code</p>
        <svg class="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path fill="white"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      </a>
    </div>
  </div>
</template>
<script>
import { useUserStore } from '../stores/userStore'

export default {
  data() {
    return {
      ErrorMessage: false,
      errMsg: "",
      authData: null
    };
  },
  setup() {
    const userStore = useUserStore()
    return { userStore }
  },
  methods: {
    GoogleSignIn() {
      this.userStore.GoogleSignIn();
    },
    GithubSignIn() {
      this.userStore.GithubSignIn()
    },
    EmailSign(e) {
      this.userStore.EmailSign()
    }
  }
};
</script>
<style scoped>.wrap {
  margin: auto;
  max-inline-size: 90%;
}</style>