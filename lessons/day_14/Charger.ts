import RobotCat from "./RobotCat";

export function charge(robotCatList: RobotCat[]): void {
    robotCatList.forEach(robotCat => {
        console.log(robotCat.charge());
    });
}
