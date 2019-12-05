import { skillsReciever } from '../../services/client';

const convertSkills = () => {

  return skillsReciever().then((data) => {
    const result = { categories: [], skills: {} };
    data.map((res) => {
      result['categories'].push({
        id: res.id,
        name: res.name,
      });
      result.skills[res.name] = res.skills;
    });
    return result;
  });
};


/* 
ACCTUAL 

 {
      "id": 0,
      "name": "front",
      "skills": [
        {
          "id": 0,
          "name": "Angular",
          "icon": "angular"
        },
        {
          "id": 1,
          "name": "React",
          "icon": "react"
        },
      }


return
   {
    id : 0,
    name: front,
  },
  {
    id : 1,
    name: back,
  },
  .....

*/


// skillsReciever().then((data) => data);
/*


  for (let a=0; a<3; a++) {
    for (let b=0; b <3; b ++) {
      console.log(`${a}.${b}`)
    })
  }
Expected output :
a.1
a.2
a.3

b.1
b.2
b.3


1. O Récupération des categorie Name
2. O Recuperation des skills Name
2. O Association des categorie name et des Skills.
*/

export default convertSkills;
