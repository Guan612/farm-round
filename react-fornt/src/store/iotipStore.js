import {create} from 'zustand'

const useIotInfoStore = create((set) => ({
    iotInfo: {
        name: '',
        ip: '',
    },
    setIotInfo: (iotInfo) => set(() => ({ iotInfo })),
    // ... other state and actions
}))