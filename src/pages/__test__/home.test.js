import configureMockStore from 'redux-mock-store';
import { addList } from '../../store/actions';

const mockStore = configureMockStore([]);

describe('async actions', () => {
  it('should dispatch action', () => {
    const store = mockStore({});
    store.dispatch(addList());

    const actions = store.getActions();
    const expectedPayload = { type: 'ADD_LIST' };
    expect(actions).toEqual([expectedPayload]);
  });
});
