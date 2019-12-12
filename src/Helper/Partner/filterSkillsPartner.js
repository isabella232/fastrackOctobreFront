const filterSkillsPartner = (skill, partnerSkills) => {
  return partnerSkills.some((partnerSkill) => skill.id === partnerSkill.id);
};

export default filterSkillsPartner;
