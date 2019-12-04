const initialState = {
};

const GET_SKILLS = 'GET_SKILLS';

const skillsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SKILLS:
      //console.log ("I'm the skillsReducer, and i run  - GET_SKILLS - action"),
      return { skills: action.payload };
      
    default:
      return state;
  }
};

export default skillsReducer;
