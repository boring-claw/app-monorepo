import {
  createEventSource,
  connectEventSource,
  disconnectEventSource,
  onMessage,
} from './sseUtils';

describe('sseUtils', () => {
  describe('createEventSource', () => {
    it('should create EventSource instance', () => {
      const es = createEventSource('https://example.com/events');
      expect(es).toBeDefined();
    });
  });

  describe('connectEventSource', () => {
    it('should have connectEventSource method', () => {
      expect(typeof connectEventSource).toBe('function');
    });
  });

  describe('disconnectEventSource', () => {
    it('should have disconnectEventSource method', () => {
      expect(typeof disconnectEventSource).toBe('function');
    });
  });

  describe('onMessage', () => {
    it('should have onMessage method', () => {
      expect(typeof onMessage).toBe('function');
    });
  });
});
