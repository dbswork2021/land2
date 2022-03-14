import 'assets/css/index.css';
import { useEffect, useState } from 'react';
import { LandApi } from 'utils/api';

const Index = () => {
  const [url, setUrl] = useState('http://google.com');
  useEffect(() => {
    LandApi().then((res) => {
      setUrl(res.data.url);
    });
  });
  const onClick = () => {
    window.location.href = url;
  };
  return (
    <div>
      <div className="index">
        <a onClick={onClick}>
          <img src={require('../assets/img/om_01.jpg')} />
          <img src={require('../assets/img/om_02.jpg')} />
          <img src={require('../assets/img/om_03.jpg')} />
          <img src={require('../assets/img/om_04.jpg')} />
          <img src={require('../assets/img/om_05.jpg')} />
          <img src={require('../assets/img/om_06.jpg')} />
          <img src={require('../assets/img/om_07.jpg')} />
          <img src={require('../assets/img/om_08.jpg')} />
          <img src={require('../assets/img/om_09.jpg')} />
          <img src={require('../assets/img/om_10.jpg')} />
          <img src={require('../assets/img/om_11.jpg')} />
          <img src={require('../assets/img/om_12.jpg')} />
          <img src={require('../assets/img/om_13.jpg')} />
          <img src={require('../assets/img/om_14.jpg')} />
          <img src={require('../assets/img/om_15.jpg')} />
          <img src={require('../assets/img/om_16.jpg')} />
          <img src={require('../assets/img/om_17.jpg')} />
          <img src={require('../assets/img/om_18.jpg')} />
        </a>
      </div>
      <div className="footer">
        <a onClick={onClick}>
          <img
            className="fixed-btn"
            src={require('../assets/img/button.png')}
          />
        </a>
      </div>
    </div>
  );
};

export default Index;
