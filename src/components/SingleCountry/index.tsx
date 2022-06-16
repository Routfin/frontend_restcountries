import * as C from './styles';

import { SingleCountryTS } from '../../types/SingleCountry';
import { Link } from 'react-router-dom';

const SingleCountry = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencie,
  languages,
  borders,
  flag,
}: SingleCountryTS) => {
  return (
    <C.CountryData>
      <img src={flag} alt={`Bandeira do país: ${name}`} />
      <div className="data--area">
        <h1>{name}</h1>
        <div className="data--firstArea">
          <p><span>Nome nativo: </span>{nativeName}</p>
          <p><span>População: </span>{population}</p>
          <p><span>Região: </span>{region}</p>
          <p><span>Sub Região: </span>{subregion}</p>
          {capital&& 
            <p><span>Capital: </span>{capital}</p>
          }
          <p className="topLevel"><span>Top Level Domain</span>{topLevelDomain}</p>
          {currencie &&
            <p><span>Moedas locais: </span>{currencie.map(item => item.name)}</p>
          }
          <p><span>Idiomas </span>{languages.map((item, index) => (<span key={index} className='language'>{item.name}</span>))}</p>
        </div>
        {borders && 
          <div className="border--area">
            <p>Países fronteira: </p>
            <div className="borders">
              {borders.map((item, index) => <Link to={`/code/${item}`} key={index}>{item}</Link>)}
            </div>
          </div>
      }
      </div>
    </C.CountryData>
  )
}

export default SingleCountry