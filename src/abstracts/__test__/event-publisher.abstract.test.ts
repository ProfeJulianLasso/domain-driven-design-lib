import { expect } from 'chai';
import { Observable } from 'rxjs';
import * as sinon from 'sinon';
import * as events from './mock/event-publisher.abstract.mock';

describe('EventPublisherAbstract', () => {
  let eventPublisher: events.UsuarioCreadoEventPublisher;
  let proxy: events.ClientProxy;

  beforeEach(() => {
    proxy = {
      emit: () =>
        new Observable((observer) => {
          observer.next();
          observer.complete();
        }),
    } as events.ClientProxy;
    eventPublisher = new events.UsuarioCreadoEventPublisher(proxy);
  });

  it('should to be defined', () => {
    expect(eventPublisher).to.be.not.undefined;
  });

  it('should publish an event', () => {
    // Arrange
    const eventPublisherConstructorSpy = sinon.spy(
      events,
      'UsuarioCreadoEventPublisher'
    );
    const eventPublisherSpy = sinon.spy(
      events.UsuarioCreadoEventPublisher.prototype,
      'emit'
    );
    const dataResponse = { id: '1', nombre: 'Julian', apellido: 'Lasso' };
    const expectedEventName = 'usuario_creado';
    const expectedEventData = JSON.stringify({ data: [dataResponse] });

    // Act
    eventPublisher = new events.UsuarioCreadoEventPublisher(proxy);
    eventPublisher.response = [dataResponse];
    eventPublisher.publish();

    // Assert
    expect(eventPublisherConstructorSpy.calledWith(proxy)).to.be.true;
    expect(eventPublisherSpy.calledWith(expectedEventName, expectedEventData))
      .to.be.true;
  });
});
