export const filterSkillsPartnerActive = (skill, partnerSkills) => partnerSkills && partnerSkills.some((partnerSkill) => skill.id === partnerSkill.id);

export const filterSkillsPartnerUnactive = (skill, partnerSkills) => partnerSkills && !partnerSkills.some((partnerSkill) => skill.id === partnerSkill.id);
