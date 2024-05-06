import mqtt from 'mqtt';

// 创建一个MQTT Broker
const mqttServer = mqtt.createServer();

// 监听MQTT Broker的连接事件
mqttServer.on('client', function(client) {
    console.log('客户端已连接:', client.id);
    client.on('disconnect', function() {
        console.log('客户端已断开连接:', client.id);
    });
    client.on('error', function(err) {
        console.error('客户端发生错误:', err);
    });
});

// 监听MQTT客户端发布消息事件
mqttServer.on('published', function(packet, client) {
    if(packet.topic === 'device/status') {
        console.log('收到设备状态更新:', packet.payload.toString());
    }
});

// 设置MQTT服务器监听端口
mqttServer.listen(1883, function() {
    console.log('MQTT Broker 已启动');
});