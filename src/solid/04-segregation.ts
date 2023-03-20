
interface Bird {
    eat():void;
}

interface flyingBird {
    fly(): void;
}

interface RunningBird {
    run():void;
}

interface SwimmerBird {
    swin():void;
}


class Tucan implements Bird, flyingBird{
    public fly():void {} 
    public eat():void {}
}

class Humminbird implements Bird, flyingBird{
    public fly():void {} 
    public eat():void {}
}

class Ostrich implements Bird, RunningBird {
    public eat():void {}
    public run():void {}
}

class Penguin implements Bird, SwimmerBird {
    public eat():void {}
    public swin():void {}
}