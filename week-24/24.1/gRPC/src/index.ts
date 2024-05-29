// import path from 'path';
// import * as grpc from '@grpc/grpc-js';
// import { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
// import * as protoLoader from '@grpc/proto-loader';

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


import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { ProtoGrpcType } from './generated/a';
import { AddressBookServiceHandlers } from './generated/AddressBookService';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const personProto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

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

const handler: AddressBookServiceHandlers = {
	AddPerson: (call, callback) => {
		let person = {
			name: call.request.name,
			age: call.request.age
		}
		PERSONS.push(person);
		callback(null, person)
	},
	GetPersonByName: (call, callback) => {
		let person = PERSONS.find(x => x.name === call.request.name);
		if (person) {
			callback(null, person)
		} else {
			callback({
				code: Status.NOT_FOUND,
				details: "not found"
			}, null);
		}
	}
}


const server = new grpc.Server();

server.addService((personProto.AddressBookService).service, handler);
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
	server.start();
});