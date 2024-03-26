export default abstract class LoginPage {

    abstract inputUsername(username: string): void;
    abstract inputPassword(password: string): void;
    abstract clickOnLoginBtn(): void;

}