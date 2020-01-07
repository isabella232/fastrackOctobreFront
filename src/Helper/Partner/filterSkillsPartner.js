export const filterSkillsPartnerActive = async (skill, partnerSkills) => await partnerSkills.some((partnerSkill) => skill.id === partnerSkill.id);

export const filterSkillsPartnerUnactive = (skill, partnerSkills) => !partnerSkills.some((partnerSkill) => skill.id === partnerSkill.id);
