import { FC, FormEvent, useState } from "react"
import { IRange } from './Range.d';

const Range: FC<IRange> = ( { onChange, initValue }) => {
  const [inputValue, setInputValue] = useState<number>(initValue);

  const rangeOnInput = (event: FormEvent<HTMLInputElement>) => {
    const currentValue = (event.target as HTMLInputElement).value;
    const valueNumber = Number( currentValue );
    setInputValue( valueNumber );
    onChange( valueNumber );
  }

  return (
    <li className="create-password__content__fwitem">
      <div className="create-password__content__fwchecked">
        <div>
          <label className="create-password__content__fphase">Password Length</label>
        </div>
        <input
          className="create-password__content__input-range"
          type="range"
          min={8}
          max={20}
          step={1}
          onInput={ rangeOnInput }
          defaultValue={ inputValue }
        />
        <input
          className="create-password__content__number"
          type="number"
          value={ inputValue }
          readOnly
          //onChange={ event => setInputValue(event.target.value) }
        />
      </div>
    </li>
  )
}

export default Range
