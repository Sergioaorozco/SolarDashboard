import { defineStore } from 'pinia';
// Configuration
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, signOut  } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import router from '../router';
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
      user: JSON.parse(localStorage.getItem('user')),
      error: null,
      ErrorMessage: false
    }
  },
  actions: {
    async GoogleSignIn() {
      try {
        await setPersistence(auth, browserLocalPersistence);
        const result = await signInWithPopup(auth, providerGoogle)
        this.user = result.user
        localStorage.setItem('user', JSON.stringify(this.user))
        let uid = this.user.uid
        if(this.user){
          router.push({
            name:'dashboard',
            params: {userInfo:(uid)},
          })
        }
      } catch (error) {
        this.ErrorMessage = true
        switch(error.code) {
          case "auth/account-exists-with-different-credential":
            this.error = "Invalid Email.";
            break;
          case "auth/user-not-found":
            this.error = "You're not authorized to access this application. Please Sign Up.";
            break;
        }
      }
    },
    async GithubSignIn() {
      try {
        await setPersistence(auth, browserLocalPersistence);
        const result = await signInWithPopup(auth, providerGithub)
        this.user = result.user
        if(this.user){
          router.push({
            name:'dashboard',
            params: {userInfo:(uid)},
          })
        }
      } catch (error) {
          this.ErrorMessage = true
          console.log(error)
          switch(error.code) {
            case "auth/account-exists-with-different-credential":
              this.error = "Invalid Email.";
              break;
            case "auth/user-not-found":
              this.error = "You're not authorized to access this application. Please Sign Up.";
              break;
          }
      }
    },
    async EmailSign(e) {
      try {
        e.preventDefault()
        const email = document.getElementById('clientEmail').value
        const password = document.getElementById('clientPass').value
        await setPersistence(auth, browserLocalPersistence);
        const result = await signInWithEmailAndPassword(auth, email, password)
        this.user = result.user
        if(this.user){
          router.push({
            name:'dashboard',
            params: {userInfo:(uid)},
          })
        }
      } catch(error) {
          this.ErrorMessage = true
          console.log(error)
          switch (error.code) {
            case "auth/invalid-email":
              this.error = "Invalid Email.";
              break;
            case "auth/user-not-found":
              this.error = "No account with that e-mail was found.";
              break;
            case "auth/wrong-password":
              this.error = "Incorrect Password.";
              break;
        }
      }
    },
    logOut(){
      signOut(auth).then(() => {
        this.user = '';
        router.push({name:'login'})
      }).catch((error) => {
        console.log(error)
      })
    }
  }
})