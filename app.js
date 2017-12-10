const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

app.listen(8080);


app.all("*",function (req,res,next) {
  res.header("Access-Control-Allow-Headers","Content-Type,X-Requested-With,Content-Length,Authorization,Accept");
  res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE");
  res.header("Content-Type","application/json;charset=utf8");
  next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

//api接口

app.get("/getApartment",function (req,res) {
  console.log("收到获取房源信息请求")
  res.send(JSON.stringify(apartmentMs));
});

app.post("/getStay",function (req,res) {
  console.log("收到获取住户信息请求")
  let data = userMs.find(i => req.body.id === i.id);
  res.send(JSON.stringify(data));
});

//模拟的房源和住户信息

const apartmentMs = {
  name: '我是房源名称',
  latestId: [4, 3, 2, 1, 0],
};

const userMs = [
  { id: 4, name: '小明', imgUrl: '4', checkTime: 1511412127859, evaluation: '评价4', },
  { id: 3, name: '小李', imgUrl: '3', checkTime: 1511312127859, evaluation: '评价3', },
  { id: 2, name: '小张', imgUrl: '2', checkTime: 1511212127859, evaluation: '评价2', },
  { id: 1, name: '小陈', imgUrl: '1', checkTime: 1511112127859, evaluation: '评价1', },
  { id: 0, name: '小方', imgUrl: '0', checkTime: 1511012127859, evaluation: '评价0', },
];