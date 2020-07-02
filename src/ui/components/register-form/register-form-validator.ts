import { cpfRegex } from '../../../constants/validation'

export function checkIfCpfIsValid(cpf: string): boolean {
    return cpfRegex.test(cpf)
}

export function checkIfPasswordAndConfirmPasswordAreEqual(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
}