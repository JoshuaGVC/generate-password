export interface IInputCheckbox {
  label: string;
  checked?: boolean;
  onChange: ( checked: boolean, name: string ) => void
}
