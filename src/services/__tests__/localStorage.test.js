describe('localStorage', () => {
  it('should be equal', () => {
    localStorage.setItem('test', 'jesuisuntest');
    const token = localStorage.getItem('test');
    expect(token).toBe('jesuisuntest');
  });
});
