const io = require("socket.io")();

io.on("connection", (socket) => {
  var timeleft = 10;
  socket.on("subscribeTimer", (interval) => {
    var downloadTimer = setInterval(function () {
      if (timeleft <= 1) {
        clearInterval(downloadTimer);
      }
      timeleft -= 1;
      socket.emit("timer", timeleft);
    }, 1000);
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

const port = 8000;
io.listen(port);
