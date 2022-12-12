import { FC, FormEvent } from "react"
import { IInputCheckbox } from './InputCheckbox.d';

const InputCheckbox: FC<IInputCheckbox> = ( { label, checked, onChange }) => {
  const text = label.toLowerCase();

  const onChangeHandle = (event: FormEvent<HTMLInputElement>) => {
    const checked = (event.target as HTMLInputElement).checked;
    onChange( checked, text );
  }

  return (
    <li className="create-password__content__fwitem">
      <div className="create-password__content__fwchecked">
        <input
          className="create-password__content__fwiinput"
          type="checkbox"
          name={ text }
          id={ text }
          defaultChecked={ checked }
          onChange={ onChangeHandle }
        />
        <label className="create-password__content__fwilabel" htmlFor={ text }>
          { label }
        </label>
      </div>
    </li>
  )
}

export default InputCheckbox
