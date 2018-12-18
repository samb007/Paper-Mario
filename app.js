const mario1 = document.querySelector(".mario1");
const bowser1 = document.querySelector(".bowser1");
const princessPeach1 = document.querySelector(".princess-peach1");
const mario2 = document.querySelector(".mario2");
const bowser2 = document.querySelector(".bowser2");
const princessPeach2 = document.querySelector(".princess-peach2");
const characterSelect = document.querySelector(".character-select");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const attack1 = document.querySelector('.attack1');
const attack2 = document.querySelector('.attack2');
const characterSelect1 = document.querySelector('.character-select1');
const characterSelect2 = document.querySelector('.character-select2');
const healthBar1 = document.querySelector('.health-bar1');
const healthBar2 = document.querySelector('.health-bar2');
const normalAttack1 = document.querySelector('.normal-attack1');
const specialAttack1 = document.querySelector('.special-attack1');
const verbalAssault1 = document.querySelector('.verbal-assault1');
const normalAttack2 = document.querySelector('.normal-attack2');
const specialAttack2 = document.querySelector('.special-attack2');
const verbalAssault2 = document.querySelector('.verbal-assault2');
const bothNormalAttack = document.getElementById('normal-attack');
const health1 = document.querySelector('.bar1');
const health2 = document.querySelector('.bar2');
let playerChoice = 0;
let normalAttackDmg1 = 20;
let normalAttackDmg2 = 20;
let specialAttackDmg1 = 30;
let specialAttackDmg2 = 30;
let verbalAssaultDmg1 = 50;
let verbalAssaultDmg2 = 50;
let health = [100, 100];
let player1;
let player2;

// All character creations
mario1.addEventListener('click', ()=>{    
        img1.style.visibility = "visible";
        attack1.style.visibility= "visible";
        characterSelect1.style.visibility= "hidden";
        healthBar1.style.visibility= "visible";
        img1.src= "img/mario.png";
        player1 = "Mario"
        attackMultiplier1();
        
})

bowser1.addEventListener('click', ()=>{    
    img1.style.visibility = "visible";
    attack1.style.visibility= "visible";
    characterSelect1.style.visibility= "hidden";
    healthBar1.style.visibility= "visible";
    img1.src= "img/bowser.png";
    player1 = "Bowser";
    attackMultiplier1();
})

princessPeach1.addEventListener('click', ()=>{    
    img1.style.visibility = "visible";
    attack1.style.visibility= "visible";
    characterSelect1.style.visibility= "hidden";
    healthBar1.style.visibility= "visible";
    img1.src= "img/princess-peach.png";
    player1 = "Princess Peach";
    attackMultiplier1();
})

mario2.addEventListener('click', ()=>{    
    img2.style.visibility = "visible";
    characterSelect2.style.visibility= "hidden";
    healthBar2.style.visibility= "visible";
    img2.src= "img/mario.png";
    player2 = "Mario";
    attackMultiplier2();
})

bowser2.addEventListener('click', ()=>{    
    img2.style.visibility = "visible";
    characterSelect2.style.visibility= "hidden";
    healthBar2.style.visibility= "visible";
    img2.src= "img/bowser.png";
    player2 = "Bowser";
    attackMultiplier2();
})

princessPeach2.addEventListener('click', ()=>{    
    img2.style.visibility = "visible";
    characterSelect2.style.visibility= "hidden";
    healthBar2.style.visibility= "visible";
    img2.src= "img/princess-peach.png";
    player2 = "Princess Peach"
    attackMultiplier2();
})

// Attack multiplier

const attackMultiplier1 = () =>{
    if (player1 == "Mario"){
        specialAttackDmg1 = 40
    }
    else if (player1 == "Bowser"){
        normalAttackDmg1 = 40
    }
    else if (player1 == "Princess Peach"){
        verbalAssaultDmg1 = 60
    }
}
const attackMultiplier2 = () =>{


if (player2 == "Mario"){
    specialAttackDmg2 = 30
}
else if (player2 == "Bowser"){
    normalAttackDmg2 = 40
}
else if (player2 == "Princess Peach"){
    verbalAssaultDmg2 = 60
}
console.log(normalAttackDmg1)
console.log(normalAttackDmg2)
}
attackMultiplier1();
attackMultiplier2();

// Health bar  
const healthBar = ()=>{
    health1.style.width = health[0] + '%'
    health2.style.width = health[1] + '%'
    if (health[0] <= 0){
        health1.style.width = 0 + '%'
    }
    else if (health[1] <=0){
        health2.style.width = 0 + '%'
    }
}


// All attack functions
bothNormalAttack.addEventListener('click',()=>{
        health[1]-=normalAttackDmg1;
        attack1.style.visibility="hidden";
        attack2.style.visibility= "visible";
        console.log(health[1]);
        healthBar()
})
specialAttack1.addEventListener('click', () => {
        health[1]-=specialAttackDmg1;
        attack1.style.visibility="hidden";
        attack2.style.visibility= "visible";
        console.log(health[1]);
        healthBar()
 })
 
 verbalAssault1.addEventListener('click', () => {
        health[1]-=verbalAssaultDmg1;
        attack1.style.visibility="hidden";
        attack2.style.visibility= "visible";
        console.log(health[1]);
        healthBar()
 })
 
 normalAttack2.addEventListener('click', () => {
        health[0]-=normalAttackDmg2;
        attack1.style.visibility="visible";
        attack2.style.visibility= "hidden";
        console.log(health[0]);
        healthBar()
 })
 
 specialAttack2.addEventListener('click', () => {
        health[0]-=specialAttackDmg2;
        attack2.style.visibility="hidden";
        attack1.style.visibility="visible";
        console.log(health[0]);
        healthBar()
 })
 
 verbalAssault2.addEventListener('click', () => {
        health[0]-=verbalAssaultDmg2;
        attack2.style.visibility="hidden";
        attack1.style.visibility="visible";
        console.log(health[0]);
        healthBar()
 })


