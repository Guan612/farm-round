import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { useNavigate } from "react-router-dom";

const useIotInfoStore = create(
    persist(
        (set) => ({
            iotInfo: {},
            setIotInfo: (iotInfo) => {
                set(() => ({ iotInfo }));

            },
            clearIotInfo: () => {
                set(() => ({ iotInfo: {} }));

            },
        }),
        {
            name: "iot-info-storage", // 本地存储的键
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export default useIotInfoStore;
