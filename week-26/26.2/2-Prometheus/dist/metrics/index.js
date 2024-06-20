"use strict";
// import { NextFunction, Request, Response } from "express";
// import { requestCounter } from "./requestCount";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsMiddleware = void 0;
const requestCount_1 = require("./requestCount");
const activeRequest_1 = require("./activeRequest");
const requestTime_1 = require("./requestTime");
const metricsMiddleware = (req, res, next) => {
    const startTime = Date.now();
    activeRequest_1.activeRequestsGauge.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path
    });
    res.on('finish', function () {
        const endTime = Date.now();
        const duration = endTime - startTime;
        // Increment request counter
        requestCount_1.requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });
        requestTime_1.httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: res.statusCode
        }, duration);
        activeRequest_1.activeRequestsGauge.dec({
            method: req.method,
            route: req.route ? req.route.path : req.path
        });
    });
    next();
};
exports.metricsMiddleware = metricsMiddleware;
