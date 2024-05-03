const { EventEmitter } = require("events");

const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`);
};

const myEventEmitter = new EventEmitter();

myEventEmitter.on("birthday", birthdayEventListener);

myEventEmitter.emit("birthday", { name: "Lyraeth" });
