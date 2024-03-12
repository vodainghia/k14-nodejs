const RobotCat = require('./RobotCat');

// IS-A relationship
class SolarRobotCat extends RobotCat{

    charge(){
        return super.charge() + 'with solar circuit';
    }
    
}

module.exports = SolarRobotCat;
