// if export class RobotCat {}, without 'default', we have to "import {RobotCat} from..."
// can not rename the RobotCat and have to use destruction syntax
import SolarRobotCat from './SolarRobotCat';
import BatteryRobotCat from './BatteryRobotCat';
import { charge } from './Charger';

const solarRobotCat = new SolarRobotCat("Solar", 1);
const batteryRobotCat = new BatteryRobotCat("Battery", 2);

charge([solarRobotCat, batteryRobotCat]);
