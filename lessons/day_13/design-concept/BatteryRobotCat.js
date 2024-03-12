const RobotCat = require('./RobotCat');

// IS-A relationship
class BatteryRobotCat extends RobotCat{

    charge(){
        return super.charge() + 'with battery circuit';
    }
    
}

module.exports = BatteryRobotCat;
