const ConvertToTime = (initialTime) => {
  const years = Math.floor(initialTime / 12);
  const months = initialTime % 12;
  return [
    `Depuis ${years} ans et ${months} mois.`,
  ];
};

export default ConvertToTime;