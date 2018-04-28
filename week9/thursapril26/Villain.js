class Villain extends Person {
    constructor(name) {
        super(name);
    }
    render () {
        $('.villain').html(`
        <img src="images/Villain.png">
        <h3>Name: ${this.name}</h3>
        <h4>Health: ${this.health}</h4>
        <h4>Weapon: ${this.weapon.name}</h4>
        <h4>Damage: ${this.weapon.damage}</h4>
        <button type="button" class="btn btn-danger villainbtn">Attack Hero</button>
        <button type="button" class="btn btn-light">Pass</button>
        `);
       
            };
}