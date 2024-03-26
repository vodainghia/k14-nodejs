import AndroidDriver from "./AndroidDriver";
import AppiumDriver from "./AppiumDriver";
import IOSDriver from "./IOSDriver";

export function getDriver(platform: string): AppiumDriver {

    if (!platform) {
        throw new Error("Platform can't be empty");
    }

    if (platform === 'ios') {
        return new IOSDriver();
    } else if (platform === 'android') {
        return new AndroidDriver();
    } else {
        throw new Error("We accept android and ios platform only");
    }

}
