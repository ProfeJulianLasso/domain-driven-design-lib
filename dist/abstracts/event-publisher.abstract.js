"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPublisherAbstract = void 0;
class EventPublisherAbstract {
    eventPublisher;
    _response;
    constructor(eventPublisher) {
        this.eventPublisher = eventPublisher;
    }
    get response() {
        return this._response;
    }
    set response(value) {
        this._response = value;
    }
    emit(pattern, data) {
        return this.eventPublisher.emit(pattern, data);
    }
}
exports.EventPublisherAbstract = EventPublisherAbstract;
//# sourceMappingURL=event-publisher.abstract.js.map