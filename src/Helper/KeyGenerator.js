const keyGenerator = (name) => {

  const getRandomInt = () => (

    Math.floor(Math.random() * Math.floor(10000))
  );
  const getRandomInt2 = () => (
    Math.floor(Math.random() * Math.floor(10000))
  );

  const key = `${Date.now()}${name}${getRandomInt()}${getRandomInt2()}`;
  return key;
}

export default keyGenerator;