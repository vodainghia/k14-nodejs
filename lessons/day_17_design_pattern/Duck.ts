import FlyBehavior from "./FlyBehavior";
import FlyWithWings from "./FlyWithWings";
import Quack from "./Quack";
import QuackBehavior from "./QuackBehavior";

export default class Duck {

    protected flyBehavior: FlyBehavior = new FlyWithWings();
    protected quackBehavior: QuackBehavior = new Quack();

    performQuack(): void {
        this.quackBehavior.quack();
    }

    performFly(): void {
        this.flyBehavior.fly();
    }

}