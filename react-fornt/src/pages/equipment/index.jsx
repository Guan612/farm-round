import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
            <div className="mx-2 mb-3">
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
            <div>
                <NavLink
                    to={"/addequ"}
                    className="bg-gray-800 p-4 rounded flex items-center mb-2"
                >
                    <div className="w-12 h-12 bg-gray-600 rounded mr-4"></div>
                    <div>
                        <div>添加设备</div>
                    </div>
                </NavLink>
                <div className="bg-gray-800 p-4 rounded flex items-center">
                    <div className="w-12 h-12 bg-gray-600 rounded mr-4"></div>
                    <div>
                        <div>耗材更换</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
