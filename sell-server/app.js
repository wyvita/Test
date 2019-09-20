const express = require("express");
const bodyParser = require("body-parser");
const setting = require("./libs/setting");
const MongoUtil = require("./libs/mongoUtil");
const dbutil = new MongoUtil(setting.host,setting.port,setting.dbname);
const ObjectId = require("mongodb").ObjectId;

const server = express();
server.listen(1900);

server.use(bodyParser.urlencoded({extended:false}));

server.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    
    next();
});

server.use("/seller",function(req,res){
	dbutil.find({},{},"sellers",function(err,result){
		if(err) throw err;
		res.send({errno:0,data:result}).end();
	})
});
server.use("/goods",function(req,res){
	dbutil.find({},{},"goods",function(err,result){
		if(err) throw err;
		res.send({errno:0,data:result}).end();
	})
});
server.use("/ratings",function(req,res){
	dbutil.find({},{},"ratings",function(err,result){
		if(err) throw err;
		res.send({errno:0,data:result}).end();
	})
});

