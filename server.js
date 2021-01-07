const io = require("socket.io")();

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

const port = 8000;
io.listen(port);
