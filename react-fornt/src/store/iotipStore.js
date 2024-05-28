import { create } from "zustand";
import { persist } from "zustand/middleware";

const useIotInfoStore = create(
    persist(
        (set) => ({
            iotInfo: {},
            setIotInfo: (iotInfo) => set(() => ({ iotInfo })),
            clearIotInfo: () => set(() => ({ iotInfo: {} })),
        }),
        {
            name: "iot-info-storage", // 本地存储的键
            getStorage: () => localStorage, // 使用 localStorage
        }
    )
);

export default useIotInfoStore;
