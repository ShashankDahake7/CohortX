"use strict";
// import path from 'path';
// import * as grpc from '@grpc/grpc-js';
// import { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
// import * as protoLoader from '@grpc/proto-loader';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));
// const personProto = grpc.loadPackageDefinition(packageDefinition);
// const PERSONS = [
//     {
//         name: "shashank",
//         age: 20
//     },
//     {
//       name: "king",
//       age: 21
//     },
// ];
// // @ts-ignore
// function addPerson(call, callback) {
// 	console.log(call)
// 	let person = {
// 		name: call.request.name,
// 		age: call.request.age
// 	}
// 	PERSONS.push(person);
// 	callback(null, person)
// }
// // @ts-ignore
// // function getPersonByName(call, callback) {
// // 	const name = call.request.name;
// // 	const person = PERSONS.find(x => x.name === name)
// // 	callback(null, person)
// // }
// const server = new grpc.Server();
// server.addService((personProto.AddressBookService as ServiceClientConstructor).service, { addPerson: addPerson });
// // server.addService((personProto.AddressBookService as ServiceClientConstructor).service, { addPerson: addPerson, getPersonByName: getPersonByName });
// server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
// 	server.start();
// });
const path_1 = __importDefault(require("path"));
const grpc = __importStar(require("@grpc/grpc-js"));
const protoLoader = __importStar(require("@grpc/proto-loader"));
const constants_1 = require("@grpc/grpc-js/build/src/constants");
const packageDefinition = protoLoader.loadSync(path_1.default.join(__dirname, './a.proto'));
const personProto = grpc.loadPackageDefinition(packageDefinition);
const PERSONS = [
    {
        name: "shashank",
        age: 20
    },
    {
        name: "king",
        age: 21
    },
];
const handler = {
    AddPerson: (call, callback) => {
        let person = {
            name: call.request.name,
            age: call.request.age
        };
        PERSONS.push(person);
        callback(null, person);
    },
    GetPersonByName: (call, callback) => {
        let person = PERSONS.find(x => x.name === call.request.name);
        if (person) {
            callback(null, person);
        }
        else {
            callback({
                code: constants_1.Status.NOT_FOUND,
                details: "not found"
            }, null);
        }
    }
};
const server = new grpc.Server();
server.addService((personProto.AddressBookService).service, handler);
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});
