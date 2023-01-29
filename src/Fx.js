import { useEffect, useState } from 'react';
import './Fx.css';

import useHttp from './useHttp';

const Fx = () => {
  const http = useHttp();
  const [fxDatetime, setFxDatetime] = useState('');
  const [fxRate, setFxRate] = useState({});

  useEffect( () => {
    async function fetchData(){
      let info = await http.get(`/`);
      if( info && info.status && info.datetime && info.rate ){
        setFxDatetime( info.datetime );
        setFxRate( info.rate );
      }else{
        setFxDatetime( '' );
        setFxRate( {} );
      }
    };
    fetchData();
  }, [] ); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    <h2>{fxDatetime}</h2>
    <table className="fxtable">
      <thead><tr>
        { Object.keys( fxRate ).map( (key) => (
          <th>{key}</th>
        ))}
      </tr></thead>
      <tbody><tr>
        { Object.keys( fxRate ).map( (key) => (
          <th>{fxRate[key]}</th>
        ))}
      </tr></tbody>
    </table>
    </>
  );
}

export default Fx;
