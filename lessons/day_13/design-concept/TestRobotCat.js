const BatteryRobotCat = require('./BatteryRobotCat');
const SolarRobotCat = require('./SolarRobotCat');
const Charger = require('./Charger');

// Models
const batteryRobotCat = new BatteryRobotCat();
const solarRobotCat = new SolarRobotCat();

// Usage of controller
Charger.charge([batteryRobotCat, solarRobotCat]);
