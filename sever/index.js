const wifi = require("Wifi");
const http = require('http');

const pin = NodeMCU.D2;
const dht = require("modules/DHT11.min.js").connect(pin);

const ssid = "PCDN";
const wifipwd = { password: "2327634@" };

console.log("connecting...");
//已连接wifi的事件
wifi.on('connected', function () {
    wifi.getIP((err, info) => {
        if (err !== null) {
            throw err;
        }
        //获取一下所在wifi下的局域网IP地址
        console.log(info.ip, 'connected');
        startServer()
    });
});
// 连接wifi
wifi.connect(ssid, wifipwd, err => {
    if (err !== null) {
        throw err;
    }
});

function startServer() {
    var PORT = 80;
    http.createServer(serverCallback).listen(PORT);
    console.log(`server is running listen ${PORT}`);
}

function readSensorData() {
    return new Promise((resolve, reject) => {
        dht.read(function (data) {
            // if (data.temp === -1 || data.rh === -1) {
            //     reject(new Error("Failed to read sensor data"));
            // } else {
            //     resolve(data);
            // }
            resolve(data);
        });
    });
}

// 服务的回调函数
function serverCallback(req, res) {
    //跨域
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // 允许所有源访问，根据需求设置实际的访问源
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "Content-Type, tenant_id"
    });
    //使用url 模块对请求地址进行解析
    var URL = url.parse(req.url, true);
    //判断请求是不是post 并且路径名称是不是/led
    if (req.method === 'POST' && URL.pathname == '/led') {
        var data = ''
        req.on('data', (chunk) => {
            data += chunk
        })
        req.on('end', () => {
            var params = JSON.parse(data)
            // 0 和 1  0是低电平开启灯   1是高电平关闭等
            digitalWrite(NodeMCU.D4, params.status);
            res.end('ok');
        })
    } else if (req.method === 'GET' && URL.pathname == '/temp') {
        readSensorData()
            .then(data => {
                console.log("tmp " + data.temp.toString() + "rh " + data.rh.toString());
                res.end(JSON.stringify({ "temp": data.temp.toString(), "rh": data.rh.toString() }));
            })
            .catch(error => {
                console.error(error);
                res.end(JSON.stringify({ "error": error.message }));
            });
    } else {
        return res.end('err')
    }
}