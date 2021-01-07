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

export { sendMessage, subscribeMessage };
