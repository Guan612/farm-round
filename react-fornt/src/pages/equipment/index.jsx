import { useState, useEffect } from "react";
import { Swiper, Image } from "react-vant";
export default function Equipment() {
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

    return (
        <div className="flex flex-col bg-gray-900 text-white h-screen">
            <div>
                <h1 className="text-xl font-bold text-center m-2">设备中心</h1>
            </div>
            <div className="mx-2">
                <Swiper autoplay={5000}>
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
            <div>
                关于设备
            </div>
        </div>
    );
}
