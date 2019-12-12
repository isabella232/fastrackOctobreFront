import React from 'react';
import { useSelector } from 'react-redux';

const filterSkillsPartner = (skillsList, currentPartner) => {
  // const matchingResults = skillsList.match(currentPartner.skills);
  // console.log('matchingResults => ', matchingResults);

  console.log('skillsList => ', skillsList, '// currentPartner => ', currentPartner.skills);

  if (currentPartner.lenght > 0) {
    currentPartner.skills.map((skill) => {
      console.log('skill.id => ', (skill.id));
    });
  }
};

export default filterSkillsPartner;
