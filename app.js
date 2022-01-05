// ทำการเชื่อม Websocket Server ตาม url ที่กำหนด
var connection = new WebSocket('ws://localhost:4000')
connection.onopen = function () {
  // จะทำงานเมื่อเชื่อมต่อสำเร็จ
  console.log("connect webSocket");
//   connection.send("Hello ABCDEF"); // ส่ง Data ไปที่ Server
};
connection.onerror = function (error) {
  console.error('WebSocket Error ' + error);
};
connection.onmessage = function (response) {
  // log ค่าที่ถูกส่งมาจาก server
  console.log("message from server: ", response.data)
  // createDivElement(response.data)
};

var i = 0;
setInterval(() => {
  connection.send("test" + i);
  i++;
}, 1000);


// function createDivElement(data) {
//   var newDiv = document.createElement('div')
//   newDiv.setAttribute("id", "myDiv");
//   newDiv.innerHTML = data
//   document.body.appendChild(newDiv)
// }
//  $(document).ready(function() {
//    $("#btnClick").click(function(e) {
//        connection.send("asdasdasdas");
//     //  console.log("asdasdasd");
//    });
//  });
// connection.send(JSON.stringify(data));
// setInterval(() => {
//   const data = {
//     posX: Math.floor(Math.random() * 800 + 1),
//     posY: Math.floor(Math.random() * 600 + 1)
//   };
//   console.log("sending to data to client:", data);
//   connection.send(JSON.stringify(data));
// }, 1000);