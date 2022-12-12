export interface IInputs {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export interface ICheckboxes {
  onChange: ( data: IInputs ) => void;
  inputsStates: IInputs;
}
