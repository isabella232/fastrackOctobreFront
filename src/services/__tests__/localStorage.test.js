import { setToken } from '../../Helper/Partner/localStorage';

describe('localStorage', () => {
  it('should be equal', () => {
    setToken('test');
    expect(localStorage.getItem('token')).toBe('test');
  });
});
