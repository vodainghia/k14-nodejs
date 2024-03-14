import RobotCat from './RobotCat';

// IS-A relationship
export default class SolarRobotCat extends RobotCat {

    // the same with parent class => redundant constructor
    constructor(name: string, id: number) {
        super(name, id);
    }

    charge(): string {
        return super.charge() + 'with solar circuit';
    }

}
