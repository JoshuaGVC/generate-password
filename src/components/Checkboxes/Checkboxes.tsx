import { FC, useEffect, useState } from 'react'
import InputCheckbox from './InputCheckbox'
import { ICheckboxes, IInputs } from './Checkboxes.d';

const Checkboxes: FC<ICheckboxes> = ({ onChange, inputsStates }) => {
  const [data, setData] = useState<IInputs>(inputsStates);

  const handleInput = ( checked: boolean, name: string ) => {
    setData({
      ...data,
      [ name ]: checked
    });
  }

  useEffect(() => {
    onChange( data );
  }, [ data ])

  return (
    <>
      <InputCheckbox label="Uppercase" onChange={ handleInput } checked={ data.uppercase }/>
      <InputCheckbox label="Lowercase" onChange={ handleInput } checked={ data.lowercase }/>
      <InputCheckbox label="Numbers" onChange={ handleInput } checked={ data.numbers }/>
      <InputCheckbox label="Symbols" onChange={ handleInput } checked={ data.symbols }/>
    </>
  )
}

export default Checkboxes

