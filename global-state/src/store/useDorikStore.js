import create from "zustand";
import { devtools } from 'zustand/middleware';

export const useDorikStore = create(devtools(
    (set) => ({
        counter: 100,
        mode: 'light',
        user: {
            name: 'Choyan',
            age: 30
        },

        increase: () => set((state) => ({
           counter: state.counter + 1 
        })),
        decrease: () => set((state) => ({
            counter: state.counter - 1
        })),
        changeMode: (newMode) => set(() => ({
            mode: newMode
        })),

        updateProfile: (newData) => set((state) => ({
            user: {
                ...state.user,
                ...newData
            }
        }))
    })
))


export const facebookStore = create((set) => ({

}))