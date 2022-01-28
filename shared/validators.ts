export type ValidationResult = true | string;
export type ValidatorFn<T = string> = (value: T) => ValidationResult;

export class Validators {
  static required (value: string): ValidationResult {
    return !!value || 'Campo requerido'
  }

  static email (value: string): ValidationResult {
    return (
      (!!value &&
        /^[_a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(value)) ||
      'Dirección de correo electrónico no vlida'
    )
  }

  static nonZero (value: string | number): ValidationResult {
    return (!!value && value > 0) || 'Cantidad no válida'
  }

  static maxLength (max: number): ValidatorFn {
    return value => (!!value && value.length <= max) || 'Limite de caracteres excedido'
  }

  static minLength (min: number): ValidatorFn {
    return value => (!!value && value.length >= min) || `Se requiren al menos ${min} caracteres`
  }

  static passConfirm (password: string): ValidatorFn {
    return value => (!!value && value === password) || 'No Coinciden las contraseñas'
  }

  static number (value: string): ValidationResult {
    return (!!value && /^[0-9]+$/.test(value)) || 'Formato incorrecto'
  }

  static bornDate (value: string): ValidationResult {
    value = value.substring(6, 10) + '/' + value.substring(3, 5) + '/' + value.substring(0, 2)
    const date = new Date()
    let currentDate
    currentDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    if (date.getMonth() + 1 < 10) {
      currentDate = currentDate.substring(0, 5) + '0' + currentDate.substring(5)
    }
    if (date.getDate() < 10) {
      currentDate = currentDate.substring(0, 8) + '0' + currentDate.substring(8)
    }
    return (!!value && value <= currentDate) || 'Fecha no válida'
  }
}
