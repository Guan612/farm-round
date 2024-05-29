import { useNavigate } from "react-router-dom";
import { Button, Input, Form } from "react-vant";
import { ArrowLeft } from "@react-vant/icons";
import useIotInfoStore from "../../store/iotipStore";
import { useEffect } from "react";
export default function AddEqu() {
    const navigate = useNavigate();
    const { iotInfo, setIotInfo, clearIotInfo } = useIotInfoStore.getState();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        setIotInfo(values);
        navigate('/addequ', { replace: true });
    };
    
    return (
        <div className="flex flex-col bg-gray-900 text-white h-screen">
            <div className="flex flex-row items-center m-2">
                <Button
                    icon={<ArrowLeft />}
                    size="small"
                    round
                    onClick={() => navigate(-1)}
                ></Button>
                <span className="text-xl ml-2">添加设备</span>
            </div>
            <div className="m-2">
                <Form
                    form={form}
                    onFinish={onFinish}
                    footer={
                        <div style={{ margin: "16px 16px 0" }}>
                            <Button
                                className="mb-2"
                                round
                                nativeType="submit"
                                type="primary"
                                block
                            >
                                {iotInfo.equip ? "更新设备" : "添加设备"}
                            </Button>
                            <div className="flex flex-row justify-around">
                                {iotInfo.equip && (
                                    <>
                                        <Button round type="info">
                                            查看iot信息
                                        </Button>
                                        <Button
                                            round
                                            type="warning"
                                            onClick={clearIotInfo}
                                        >
                                            删除iot信息
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    }
                >
                    <Form.Item
                        rules={[{ required: true, message: "请填写设备名" }]}
                        name="equname"
                        label="设备名"
                    >
                        <Input placeholder="请输入设备ip" />
                    </Form.Item>
                    <Form.Item
                        tooltip={{
                            message: "可以通过路由器查看如‘192.168.2.13’",
                        }}
                        rules={[{ required: true, message: "请填写设备ip" }]}
                        name="equip"
                        label="设备ip"
                    >
                        <Input placeholder="请输入设备ip" />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
