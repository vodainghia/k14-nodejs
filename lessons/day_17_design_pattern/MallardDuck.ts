import Duck from "./Duck";
import Quack from "./Quack";

export default class MallardDuck extends Duck {

    constructor() {
        super();
        this.quackBehavior = new Quack();
    }
    
}