import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://vercel.com/om-shankars-projects/face2face"],
    methods: ["GET", "POST"],
  },
});

let connectedUsersMap = {};

export const getReceiverSocketId = (receiverId) => {
  return connectedUsersMap[receiverId];
};

io.on("connection", (socket) => {
  console.log(" a user connected ", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== undefined) connectedUsersMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(connectedUsersMap));

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete connectedUsersMap[userId];
    io.emit("getOnlineUsers", Object.keys(connectedUsersMap));
  });
});

export { app, server, io };
