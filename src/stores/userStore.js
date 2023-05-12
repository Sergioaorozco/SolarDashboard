import { defineStore } from 'pinia';
// Configuration
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, setPersistence, browserLocalPersistence  } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import router from '../router/index.js'
// Firebase Configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDVkwDplSu8sXq_rIa-Wl9HVGni5-QK6l0',
  authDomain: 'sekretuadev.firebaseapp.com',
  projectId: 'sekretuadev',
  storageBucket: 'sekretuadev.appspot.com',
  messagingSenderId: '980788870728',
  appId: '1:980788870728:web:dd7b40108b27dae4d7a27d',
  measurementId: 'G-JCHDVPC1LF'
}

// Initialize App
firebase.initializeApp(firebaseConfig)

// Div Selectors
const providerGithub = new GithubAuthProvider()
const providerGoogle = new GoogleAuthProvider()
const auth = getAuth()


export const useUserStore = defineStore( "userStore", {
  state: () => {
    return {
      user: [],
    }
  },
  actions: {
    async GoogleSignIn() {
      try {
        const success = await setPersistence(auth, browserLocalPersistence)
        console.log(success)
        const result = await signInWithPopup(auth, providerGoogle)
        const user = result.user
        if(user){
          this.authData = result
          this.$emit('userData', this.authData)
          router.push({
            name:'home',
            params: {userInfo:(user.uid)},
          })
        }
      } catch (error) {
        console.log(error)
        this.ErrorMessage = true
        switch(error.code) {
          case "auth/account-exists-with-different-credential":
            this.errMsg = "Invalid Email.";
            break;
          case "auth/user-not-found":
            this.errMsg = "You're not authorized to access this application. Please Sign Up.";
            break;
        }
      }
    },
    GithubSignIn() {
      signInWithPopup(auth, providerGithub)
        .then((result) => {
          const user = result.user
          if(user){
            this.authData = result
            this.$emit('userData', this.authData)
            router.push({
              name:'home',
              params: {userInfo:(user.uid)},
              },
        )}
        }).catch((error) => {
          this.ErrorMessage = true
          console.log(error)
          switch(error.code) {
            case "auth/account-exists-with-different-credential":
              this.errMsg = "Invalid Email.";
              break;
            case "auth/user-not-found":
              this.errMsg = "You're not authorized to access this application. Please Sign Up.";
              break;
          }
        })
    },
    EmailSign(e){
      const email = document.getElementById('clientEmail').value
      const password = document.getElementById('clientPass').value
      e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user
            console.log(user)
            this.authData = result
            this.$emit('userData', this.authData)
            router.push({
              name:'home',
              params: {userInfo:(user.uid)},
            })
          }).catch((error) => {
            this.ErrorMessage = true
            console.log(error)
            switch (error.code) {
              case "auth/invalid-email":
                this.errMsg = "Invalid Email.";
                break;
              case "auth/user-not-found":
                this.errMsg = "No account with that e-mail was found.";
                break;
              case "auth/wrong-password":
                this.errMsg = "Incorrect Password.";
                break;
          }
          })
    }
  }
})