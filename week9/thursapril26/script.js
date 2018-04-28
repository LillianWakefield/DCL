$(function(){
    //enter player names
    heroName=prompt("What is your hero's name?")
    villainName=prompt("What is your villain's name?")

var hero = new Hero(heroName);
var villain =  new Villain(villainName);

//equips players with weapons
var heroWeapon = new Weapon('Batrang')
var villainWeapon = new Weapon('Joker Venom')
hero.equipWeapon(heroWeapon);
villain.equipWeapon(villainWeapon);
//renders players
villain.render();
hero.render();
//hero attacks villain
$('.hero').on('click', '.herobtn', function(event){
    event.preventDefault();
    hero.attack(villain);
    villain.render();
    if(villain.health<1){
        alert('You win!')
    
    }
});
//villain attacks hero
$('.villain').on('click', '.villainbtn', function(event){
    event.preventDefault();
    villain.attack(hero);   
    hero.render();
    if(hero.health<1){
        alert('Game Over!')

    }
});
//end gameplay


});
