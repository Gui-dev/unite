import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface IBadge {
  id: string
  name: string
  email: string
  event_title: string
  check_in_url: string
  image?: string
}

interface IBadgeProps {
  data: IBadge | null
  save: (data: IBadge) => void
  update_avatar: (image: string) => void
  remove: () => void
}

export const useBadgeStore = create(
  persist<IBadgeProps>(
    (set) => {
      return {
        data: null,
        save: (data: IBadge) =>
          set(() => {
            return {
              data,
            }
          }),
        update_avatar: (image) =>
          set((state) => {
            return {
              data: state.data
                ? {
                    ...state.data,
                    image,
                  }
                : state.data,
            }
          }),
        remove: () => set(() => ({ data: null })),
      }
    },
    {
      name: 'unite:badge',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
