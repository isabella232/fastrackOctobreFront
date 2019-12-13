export const filterSkillsPartnerActive = (skill, partnerSkills) => {
  return partnerSkills.some((partnerSkill) => skill.id === partnerSkill.id);
};

export const filterSkillsPartnerUnactive = (skill, partnerSkills) => {
  return !partnerSkills.some((partnerSkill) => skill.id === partnerSkill.id);
};
