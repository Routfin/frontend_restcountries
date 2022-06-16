import * as C from './styles';
import { useEffect, useState } from 'react';

import Input from '../../components/Input';

import { api } from '../../api';

import { CountriesTS } from '../../types/Countries';
import CountryItem from '../../components/CountryItem';

const Countries = () => {
  const [countries, setCountries] = useState<CountriesTS[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCountries()
  }, [])

  const loadingDelay = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  const getAllCountries = async () => {
    setLoading(true);
    const resultCountries = await api.getCountries();
    setCountries(resultCountries);
    loadingDelay();
    console.log(countries);
  }

  const lowerSearch = search.toLowerCase();

  const filteredCountries = countries.filter(country => country
    .name.toLowerCase().includes(lowerSearch) || country
      .region.toLowerCase().includes(lowerSearch)
  )

  return (
    <C.CountriesArea>
      <Input
        value={search}
        setSearch={setSearch}
      />
      <div className="countries">
        {loading &&
          <div className=''>Carregando...</div>
        }
        {!loading &&
          filteredCountries.map((item) => (
            <CountryItem 
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              flag={item.flags.png}
            />
          ))
        }
      </div>
    </C.CountriesArea>
  )
}

export default Countries