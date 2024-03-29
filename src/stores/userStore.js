import { defineStore } from 'pinia';
// Configuration
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, signOut, onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app'
import router from '../router';
// Firebase Configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
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
    async initializeAuth() {
      try {
        await setPersistence(auth, browserLocalPersistence);
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user = user;
            router.push({name:'dashboard',})
            localStorage.setItem('user', JSON.stringify(user));
          } else {
            this.user = null;
            localStorage.removeItem('user');
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async GoogleSignIn() {
      try {
        const result = await signInWithPopup(auth, providerGoogle)
        this.user = result.user
        if(this.user != null) {
          router.push({name:'dashboard',})
        }
        this.initializeAuth();
      } catch (error) {
        this.handleAuthError(error);
      }
    },
    async GithubSignIn() {
      try {
        const result = await signInWithPopup(auth, providerGithub)
        this.user = result.user
        router.push({name:'dashboard',})
      } catch (error) {
        this.handleAuthError(error);
      }
    },
    async EmailSign(e) {
      try {
        e.preventDefault()
        const email = document.getElementById('clientEmail').value
        const password = document.getElementById('clientPass').value
        const result = await signInWithEmailAndPassword(auth, email, password)
        this.user = result.user
        this.initializeAuth();
        router.push({name:'dashboard',
        })
      } catch(error) {
        this.handleAuthError(error);
      }
    },
    handleAuthError(error) {
      this.ErrorMessage = true;
      console.log(error);
      switch (error.code) {
        case "auth/account-exists-with-different-credential":
          this.error = "Invalid Email.";
          break;
        case "auth/user-not-found":
          this.error = "You're not authorized to access this application. Please Sign Up.";
          break;
        case "auth/invalid-email":
          this.error = "Invalid Email.";
          break;
        case "auth/wrong-password":
          this.error = "Incorrect Password.";
          break;
        default:
          this.error = "An error occurred. Please try again.";
      }
    },
    logOut(){
      signOut(auth).then(() => {
        this.user= ''
        router.push({name:'login'})
      }).catch((error) => {
        console.log(error)
      })
    }
  }
})