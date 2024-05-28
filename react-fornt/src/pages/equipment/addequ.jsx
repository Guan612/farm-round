import { Button, Input, Form } from "react-vant";
import useIotInfoStore from "../../store/iotipStore";
export default function AddEqu() {
    const { setIotInfo, clearIotInfo } = useIotInfoStore.getState();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        setIotInfo(values);
    };

    return (
        <div className="flex flex-col bg-gray-900 text-white h-screen">
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
                                提交
                            </Button>
                            <Button round onClick={clearIotInfo}>清除iot信息</Button>
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
