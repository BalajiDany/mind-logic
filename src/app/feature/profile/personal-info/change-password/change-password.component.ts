import { Component, OnInit } from '@angular/core';

const PASSWORD_MIN_LENGHT = 8;
const PASSWORD_MAX_LENGHT = 16;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  newPassword: string;
  retypePassword: string;
  currentPassword: string;

  isValidNewPassword: boolean = false;
  isValidRetypePassword: boolean = false;

  newPasswordTotalStrength: number = 0;
  newPasswordPresentStrength: number = 0;

  private passwordRules = [
    { condition: (password: string) => password.match('(?=.*[a-z])'), reward: 20 },
    { condition: (password: string) => password.match('(?=.*[A-Z])'), reward: 20 },
    { condition: (password: string) => password.match('(?=.*\\d)'), reward: 20 },
    { condition: (password: string) => password.match('[-_@$&]'), reward: 20 },
    { condition: (password: string) => password.match('.{8,}'), reward: 20 },
  ]

  ngOnInit(): void {
    this.clearPassword();
    this.newPasswordTotalStrength = this.passwordRules
      .map(({ reward }) => reward)
      .reduce((sum, reward) => sum + reward, 0);
  }

  onNewPasswordChange() {
    this.newPasswordPresentStrength = this.getPasswordStrength(this.newPassword);
    const isValidStrength = this.newPasswordPresentStrength > 60;
    const isValidLength = this.newPassword.length >= PASSWORD_MIN_LENGHT && this.newPassword.length < PASSWORD_MAX_LENGHT;
    this.isValidNewPassword = isValidStrength && isValidLength;
  }

  onRetypePasswordChange() {
    this.isValidRetypePassword = this.newPassword === this.retypePassword;
  }

  public getPassword() {
    const isValidPassword = this.newPassword === this.retypePassword && this.isValidNewPassword;
    return {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword,
      isValidPassword,
    }
  }

  private getPasswordStrength(password: string): number {
    let strength = 0;
     this.passwordRules
      .filter(({ condition }) => condition(password))
      .map(({ reward }) => reward || 0)
      .forEach(reward => strength += reward);
    return strength;
  }

  private clearPassword() {
    this.newPassword = '';
    this.retypePassword = '';
    this.currentPassword = '';
  }
}
