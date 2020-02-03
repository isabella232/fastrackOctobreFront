import { setToken, getToken } from '../../Helper/Partner/localStorage';


describe('localStorage', () => {
  it('should be equal', () => {
    setToken('test');
    expect(getToken()).toBe('test');
  });
});
