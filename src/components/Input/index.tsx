import * as C from './styles';

import { InputTS } from '../../types/Input';

const Input = ({ value, setSearch }: InputTS) => {
  return (
   <C.InputArea>
       <input 
          type="text" 
          placeholder='Buscar por um país'
          value={value}
          onChange={e => setSearch(e.target.value)}
        />
       <select onChange={e => setSearch(e.target.value)}>
          <option value="Filtrar por região" disabled selected >Filtrar por região</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
       </select>
   </C.InputArea>
  )
}

export default Input