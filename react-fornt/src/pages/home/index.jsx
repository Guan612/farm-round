import { Switch } from "react-vant";
import  {useLed}  from "../../hooks/home/useLed";
export default function Home() {
    const { onChange, led } = useLed();
    return (
        <div className="flex flex-col bg-gray-900 text-white h-screen">
            {/* Title */}
            <div className="m-2">
                <div className="mb-4">
                    <h1 className="text-xl font-bold text-center">
                        田皮鸭的家
                    </h1>
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
                            <div>智能电灯</div>
                            <div className="">
                                <Switch checked={led} onChange={onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded flex items-center">
                        <div className="w-12 h-12 bg-gray-600 rounded mr-4"></div>
                        <div>
                            <div>温湿度传感器</div>
                            <div className="text-gray-400">
                                <div>温度：21°</div>
                                <div>湿度：50%</div>
                            </div>
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
