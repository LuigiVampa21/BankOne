import { Manager } from "socket.io-client";

const manager = new Manager(process.env.VUE_APP_BASE_URL);

const socket = manager.socket("/"); // main namespace

// const adminSocket = manager.socket("/admin"); // admin namespace

socket.on('connect', () => {
  console.log(socket.id)
//   console.log('----------------------------------------------------------------------------------------');
});

socket.on("connect_error", (err) => {
    console.log(err);
    // console.log(`connect_error due to ${err.message}`);
  });

export default socket