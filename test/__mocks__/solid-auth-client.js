import EventEmitter from 'events';
import { act } from 'react-testing-library';

const fetchResponse = { ok: true, status: 200 };
const errorFetchResponse = { ok: undefined, status: 404 };

class SolidAuthClient extends EventEmitter {
  constructor() {
    super();
    this.session = undefined;
  }

  fetch = (resource) => {
    if (resource && resource !== 'fail') {
      return fetchResponse;
    }
    if (resource && resource !== '404') {
      return errorFetchResponse;
    }
  };

  popupLogin = () => {};

  logout = () => {};

  currentSession = async () =>  {
    return {
      webId: 'https://elmer.solid.community/'
    }
  }

  trackSession(callback) {
    if (this.session !== undefined) callback(this.session);
    this.on('session', callback);
  }

  mockWebId(webId) {
    this.session = webId ? { webId } : null;
    act(() => {
      this.emit('session', this.session);
    });
  }
}

const instance = new SolidAuthClient();
jest.spyOn(instance, 'fetch');
jest.spyOn(instance, 'popupLogin');
jest.spyOn(instance, 'currentSession');
jest.spyOn(instance, 'logout');
jest.spyOn(instance, 'removeListener');

export default instance;
