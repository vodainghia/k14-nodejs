import RobotCat from './RobotCat';

// IS-A relationship
export default class BatteryRobotCat extends RobotCat {

    charge(): string {
        return super.charge() + 'with battery circuit';
    }

}
