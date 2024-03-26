import AppiumDriver from "./AppiumDriver";

export default class IOSDriver extends AppiumDriver {
    initSession(): void {
        console.log('Initializing iOS driver');

    }
}