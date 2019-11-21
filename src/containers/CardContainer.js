import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';

const CardContainer = () => {
  const [data, setData] = useState({ partners: [] });

  useEffect(() => {
    axios.get('src/data/partner.json')
      .then((res) => {
        const list = res.data;
        setData({ list });
      });
  }, []);

  return (
    <div>
    </div>
  );
};

export default CardContainer;
