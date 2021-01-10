import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8000", {
  transports: ["websocket"],
});

function sendMessage(info) {
  socket.emit("chat message", info);
}
function subscribeMessage(callback) {
  socket.on("chat message", function (msg) {
    callback(msg);
  });
}
function subscribeTimer(cb) {
  socket.on("timer", (timestamp) => cb(null, timestamp));
  socket.emit("subscribeTimer", 1000);
}

export { sendMessage, subscribeMessage, subscribeTimer };
