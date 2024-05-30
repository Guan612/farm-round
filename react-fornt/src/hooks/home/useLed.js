import { useState } from "react";
import { Dialog } from "react-vant";
import {switchLed} from '../../api/contorll'

export function useLed() {
    const [led, setLed] = useState(false);
    const onChange = async (checked) => {
        try {
            await Dialog.confirm({
                title: "提醒",
                message: "是否切换开关？",
            });
            switchLed( {"status":!checked*1});
            setLed(checked);
        } catch {
            // 取消dialog
        }
    };
    return { onChange, led }
}
