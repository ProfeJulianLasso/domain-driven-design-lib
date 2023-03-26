"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const rxjs_1 = require("rxjs");
const sinon = __importStar(require("sinon"));
const events = __importStar(require("./mock/event-publisher.abstract.mock"));
describe('EventPublisherAbstract', () => {
    let eventPublisher;
    let proxy;
    beforeEach(() => {
        proxy = {
            emit: () => new rxjs_1.Observable((observer) => {
                observer.next();
                observer.complete();
            }),
        };
        eventPublisher = new events.UsuarioCreadoEventPublisher(proxy);
    });
    it('should to be defined', () => {
        (0, chai_1.expect)(eventPublisher).to.be.not.undefined;
    });
    it('should publish an event', () => {
        const eventPublisherConstructorSpy = sinon.spy(events, 'UsuarioCreadoEventPublisher');
        const eventPublisherSpy = sinon.spy(events.UsuarioCreadoEventPublisher.prototype, 'emit');
        const dataResponse = { id: '1', nombre: 'Julian', apellido: 'Lasso' };
        const expectedEventName = 'usuario_creado';
        const expectedEventData = JSON.stringify({ data: [dataResponse] });
        eventPublisher = new events.UsuarioCreadoEventPublisher(proxy);
        eventPublisher.response = [dataResponse];
        eventPublisher.publish();
        (0, chai_1.expect)(eventPublisherConstructorSpy.calledWith(proxy)).to.be.true;
        (0, chai_1.expect)(eventPublisherSpy.calledWith(expectedEventName, expectedEventData))
            .to.be.true;
    });
});
//# sourceMappingURL=event-publisher.abstract.test.js.map