import { FC, useRef } from 'react'
import { IPassword } from './Password.d';

const Password: FC<IPassword> = ( { value } ) => {
  const input = useRef<HTMLInputElement>(null);

  const copyPassword = () => {
    const nodeHtml = input.current as HTMLInputElement;
    nodeHtml.focus();
    nodeHtml.select();
    document.execCommand('copy');
  }

  return (
    <div className="create-password__content__wrapper">
      <input
        className="create-password__content__input"
        ref={ input }
        value={ value }
        readOnly
      />
      <button
        className="create-password__content__copy-button"
        onClick={ copyPassword }
      >
      </button>
    </div>
  )
}

export default Password
