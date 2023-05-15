"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreadoEventPublisher = void 0;
const __1 = require("../../../");
class UsuarioCreadoEventPublisher extends __1.EventPublisherAbstract {
    proxy;
    constructor(proxy) {
        super(proxy);
        this.proxy = proxy;
    }
    publish() {
        return this.emit('usuario_creado', JSON.stringify({ data: this.response }));
    }
}
exports.UsuarioCreadoEventPublisher = UsuarioCreadoEventPublisher;
//# sourceMappingURL=event-publisher.abstract.mock.js.map