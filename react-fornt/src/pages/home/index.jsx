import { ChatO, AddO, ClockO } from "@react-vant/icons";
import { useState } from "react";
import { Switch, Dialog } from "react-vant";
export default function Home() {
    return (
        <div className="flex flex-col bg-gray-900 text-white h-screen">
            {/* Title */}
            <div className="m-2">
                <div className="mb-4">
                    <h1 className="text-xl font-bold text-center">田皮鸭的家</h1>
                    <div className="flex space-x-2 mt-1">
                        <span className="bg-gray-700 p-1 rounded">全屋</span>
                        <span className="bg-gray-700 p-1 rounded">寝室</span>
                    </div>
                </div>

                {/* Weather */}
                <div className="flex items-center mb-4">
                    <div className="bg-gray-700 rounded-full px-4 py-2">
                        <span>21°</span>
                        <span>成都</span>
                    </div>
                </div>

                {/* Devices */}
                <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded flex items-center">
                        <div className="w-12 h-12 bg-gray-600 rounded mr-4"></div>
                        <div>
                            <div>手机红外遥控器</div>
                            <div className="text-gray-400">手机 | 设备数4</div>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded flex items-center">
                        <div className="w-12 h-12 bg-gray-600 rounded mr-4"></div>
                        <div>
                            <div>牙刷</div>
                            <div className="text-gray-400">寝室</div>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded flex items-center">
                        <div className="w-12 h-12 bg-gray-600 rounded mr-4"></div>
                        <div>
                            <div>Xiaomi 蓝牙音箱</div>
                            <div className="text-gray-400">寝室</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
