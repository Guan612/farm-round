import { useState } from "react";
import { Tabbar } from "react-vant";
import { HomeO, Search, Contact, SettingO } from "@react-vant/icons";
import { NavLink } from "react-router-dom";
export default function AppTabbar() {
    const [name, setName] = useState("");

    return (
        <div className="flex">
            <Tabbar value={name} onChange={(v) => setName(v)}>
                <Tabbar.Item
                    name="家"
                    icon={
                        <NavLink to="/layout/home">
                            <HomeO />
                        </NavLink>
                    }
                >
                    家
                </Tabbar.Item>
                <Tabbar.Item
                    name="设备中心"
                    icon={
                        <NavLink to="/layout/equipment">
                            <SettingO spin />
                        </NavLink>
                    }
                >
                    设备中心
                </Tabbar.Item>
                <Tabbar.Item
                    name="我的"
                    icon={
                        <NavLink to="/layout/me">
                            <Contact />
                        </NavLink>
                    }
                >
                    我的
                </Tabbar.Item>
            </Tabbar>
        </div>
    );
}
