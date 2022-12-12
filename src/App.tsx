
import { FormEvent, useEffect, useRef, useState } from 'react'
import Checkboxes, { IInputs } from './components/Checkboxes'
import Password from './components/Password'
import { ICheckboxs } from './App.d';
import Range from './components/Range';

const App = () => {
  const [checkoxesList, setCheckoxesList] = useState<IInputs>({
    uppercase: false,
    lowercase: true,
    numbers: false,
    symbols: false
  });

  const [rangeLength, setRangeLength] = useState(14);
  const [passwordValue, setPasswordValue] = useState('');
  const submitButton = useRef<HTMLButtonElement>(null);

  const getInputsCheckboxs = (): string[] => {
    type nameType = keyof typeof checkoxesList;
    const names: string[] = [];

    const keys = Object.keys( checkoxesList );
    keys.forEach( item => {
      const value = checkoxesList[ item as nameType ];
      console.log("guardo esto:",value)
      if ( value ) {
        names.push( item )
      }
    })

    return names;
  }

  const checkboxsVerification = (): boolean => {
    const values = Object.values( checkoxesList as IInputs );
    return values.every( item => item === false );
  };

  const getObjectValues = (arr: string[]) => {
    const letters = 'abcdefghijklmnñopqrstuvwxyz';

    const charactersIndex: ICheckboxs = {
      uppercase: letters.toUpperCase(),
      lowercase: letters,
      numbers: '0123456789',
      symbols: '~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/'
    };

    type nameType = keyof typeof charactersIndex;

    return arr
      .map( item => {
        return charactersIndex[ item as nameType ]
      })
      .join('')
  };

  const getRandomArray = ( length: number, maxNum: number ) => {
    return Array.from( { length }, () => {
      return Math.floor( Math.random() * maxNum )
    })
  };

  const onChangeRange = ( value: number ) => {
    setRangeLength( value )
  };

  const InputsOnChange = ( data: IInputs) => {
    setCheckoxesList( data )
  };

  const characterRandoms = ( numbers: number[], values: string ): string => {
    return numbers.map( item => values[item] ).join('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const allUncheckeds = checkboxsVerification();

    if ( allUncheckeds ) return alert('tienes que checkear al menos uno');

    const inputsName = getInputsCheckboxs();
    const values = getObjectValues( inputsName ); // =>> ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789
    const numsRandoms = getRandomArray( rangeLength, values.length ); // =>> [19, 17, 19, 23, 25, 1, 8, 7]
    const password = characterRandoms(numsRandoms, values);

    setPasswordValue(password);
  };

  useEffect(() => {
    if ( submitButton.current ) {
      (submitButton.current as HTMLButtonElement).click();
    }
  }, [])

  return (
    <main className="create-password">
      <div className="create-password__content">
        <Password value={passwordValue}/>

        <form className="create-password__content__form" onSubmit={handleSubmit}>
          <ul className="create-password__content__fwrapper">
            <Checkboxes
              onChange={ InputsOnChange }
              inputsStates={ checkoxesList }
            />
            <Range onChange={ onChangeRange } initValue={14}/>
          </ul>

          <button className="create-password__content__button" type="submit" ref={submitButton}>
            Generate Password
          </button>
        </form>

      </div>
    </main>
  )
}

export default App
