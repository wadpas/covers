import { defineStore } from 'pinia'
import axiosInstance from '@/plugins/axios'

export const useAuthStore = defineStore('auth', () => {
	state: () => ({})
	actions: {
    async registerUser(form: Record<string, string>){
    return new Promise<string>(async(resolve, reject)=>{
      try {
        const {data} = await  axiosInstance.post('/auth/register', form)
    }

      )

    }
	}
})
