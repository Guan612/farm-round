import { Swiper, Image } from "react-vant";
import { AddO } from "@react-vant/icons";
const imgs = [
    "https://img.yzcdn.cn/vant/apple-1.jpg",
    "https://img.yzcdn.cn/vant/apple-2.jpg",
    "https://img.yzcdn.cn/vant/apple-3.jpg",
    "https://img.yzcdn.cn/vant/apple-4.jpg",
    "https://img.yzcdn.cn/vant/apple-5.jpg",
    "https://img.yzcdn.cn/vant/apple-6.jpg",
    "https://img.yzcdn.cn/vant/apple-7.jpg",
    "https://img.yzcdn.cn/vant/apple-8.jpg",
];
export default function Me() {
    return (
        <div className="flex flex-col bg-gray-900 text-white">
            <div className="m-2">
                <div className="mb-4">
                    <h1 className="text-xl">田皮鸭</h1>
                    <p className="text-sm text-gray-400">
                        管理账号，会员权益等
                    </p>
                    <div className="flex space-x-2 mt-1">
                        <span className="bg-gray-700 px-3 py-1 rounded">
                            2个家庭
                        </span>
                        <span className="bg-gray-700 px-3 py-1 rounded">
                            10个智能设备
                        </span>
                    </div>
                </div>

                {/* 用户信息和房屋 */}
                <div className="flex items-center mb-4">
                    <div className="bg-gray-800 p-4 rounded flex-1 mr-2">
                        <h2 className="text-lg">田皮鸭的家</h2>
                        <p className="text-sm text-gray-400">1个成员</p>
                    </div>
                    <div className="relative">
                        <img
                            src="https://img2.imgtp.com/2024/04/09/OmWWam4c.jpg"
                            alt="User"
                            className="w-12 h-12 rounded-full"
                        />
                    </div>
                </div>

                {/* 轮播图 */}
                <div className="mb-4">
                    <Swiper autoplay={5000} className="rounded-md">
                        {imgs.map((image) => (
                            <Swiper.Item key={image}>
                                <Image
                                    lazyload
                                    src={image}
                                    className="block box-border w-full h-60 p-8 bg-white pointer-events-none"
                                />
                            </Swiper.Item>
                        ))}
                    </Swiper>
                </div>

                {/* 菜单列表 */}
                <div className="space-y-4">
                    {[
                        { icon: "Icon1", label: "设备耗材", status: "" },
                        { icon: "Icon2", label: "小爱语音", status: "" },
                        { icon: "Icon3", label: "家庭网络", status: "良好" },
                        { icon: "Icon4", label: "中枢与网关", status: "" },
                        { icon: "Icon5", label: "添加其他平台", status: "" },
                        { icon: "Icon6", label: "更多设置", status: "" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-800 p-4 rounded"
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-gray-600 rounded"></div>{" "}
                                {/* 替换为真实图标 */}
                                <span>{item.label}</span>
                            </div>
                            {item.status && (
                                <span className="text-gray-400">
                                    {item.status}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
