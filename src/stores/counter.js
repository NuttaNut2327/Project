import { defineStore } from "pinia";
import {collection,getDocs} from "firebase/firestore"
import {db} from "@/firebase"
export const useLifestylesStore = defineStore('lifestyle', {
  state: () => ({
    lifestyle: []
  }),
  getters: {
    getLifestyle: (state) => {
      return state.lifestyle
    },
   
  },
   actions: {
      async fetchLifestyle() {
       const querydata = await getDocs(collection(db, "lifestyle"))
       this.lifestyle = querydata.docs.map((doc)=> doc.data())
        querydata.forEach((doc) => {
          console.log(doc.data());
        });
      }
    }
})
