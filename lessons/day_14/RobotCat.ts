export default class RobotCat {

    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getId(): number {
        return this.id;
    }

    charge(): string {
        return 'Charging... ';
    }

}
