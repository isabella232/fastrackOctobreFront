import { useDispatch } from 'react-redux';
import { skillsReciever } from '../../services/client';

const getSkills = () => {
  const dispatch = useDispatch();
  const skillsData = (skillsReciever);
  dispatch(getSkills(skillsData));
};

export default getSkills;
