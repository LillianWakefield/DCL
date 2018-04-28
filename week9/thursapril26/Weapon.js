class Weapon {
    constructor(name){
        this.name = name;
        this.damage = Math.floor(Math.random() * (21 - 10)) + 10;
    }
}