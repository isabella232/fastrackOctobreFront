import configureMockStore from 'redux-mock-store';
import { setTechno, getPartnerDetails, initSkills } from '../../store/actions';

const mockStore = configureMockStore([]);

describe('async actions', () => {
  it('should dispatch action', () => {
    const store = mockStore({});
    store.dispatch(setTechno());

    const actions = store.getActions();
    const expectedPayload = { type: 'SET_TECHNO' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch action', () => {
    const store = mockStore({});
    store.dispatch(getPartnerDetails());

    const actions = store.getActions();
    const expectedPayload = { type: 'GET_PARTNER_DETAILS' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('should dispatch action', () => {
    const store = mockStore({});
    store.dispatch(initSkills());

    const actions = store.getActions();
    const expectedPayload = { type: 'INIT_SKILLS' };
    expect(actions).toEqual([expectedPayload]);
  });
});
