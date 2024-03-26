import AppiumDriver from "./AppiumDriver";

export default class AndroidDriver extends AppiumDriver {
    initSession(): void {
        console.log('Initializing AndroidDriver driver');

    }
}