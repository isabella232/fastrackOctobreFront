const keyGenerator = (name) => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const getRandomInt2 = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const key = `${Date.now()}${name}${getRandomInt(10000, 99999)}${getRandomInt2(10000, 99999)}`;
  return key;
};

export default keyGenerator;
