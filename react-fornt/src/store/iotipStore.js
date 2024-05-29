import { create } from "zustand";
import { persist } from "zustand/middleware";
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
            storage: localStorage, // 使用 localStorage
            serialize: JSON.stringify, // 指定序列化函数
            deserialize: JSON.parse, // 指定反序列化函数
        }
    )
);

export default useIotInfoStore;
