function Fighter({ name, damage, hp, strength, agility }) {
  let loses = 0,
    wins = 0;

  this.getName = function () {
    return name;
  };

  this.getDamage = function () {
    return damage;
  };

  this.getHealth = function () {
    return hp;
  };

  this.getStrength = function () {
    return strength;
  };

  this.getAgility = function () {
    return agility;
  };

  this.heal = function (healPoints) {
    hp += healPoints;
  };

  this.attack = function (defender) {
    function random() {
      return Math.floor(Math.random() * 100) + 1;
    }
    const isSuccessful = random();
    let res = isSuccessful - (defender.getAgility() + defender.getStrength());
    if (res < 0) {
      console.log(`${name} attack missed`);
      return;
    } else {
      defender.dealDamage(damage);
      console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
      return;
    }
  };

  this.addWin = function () {
    wins++;
  };

  this.addLoss = function () {
    loses++;
  };

  this.dealDamage = function (damagePoints) {
    const prevHp = hp;
    hp = hp - damagePoints;
    if (hp < 0) {
      hp = 0;
      return prevHp;
    }
    return damagePoints;
  };

  this.logCombatHistory = function () {
    console.log(`Name:${name},Wins:${wins},Losses:${loses}`);
  };
}

const battle = function (fighter1, fighter2) {
  if (fighter1.getHealth() === 0 && fighter2.getHealth() === 0) {
    return 0;
  }
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead`);
    return 0;
  }
  if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead`);
    return 0;
  }
  while (fighter1.getHealth() > 0 || fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    if (fighter1.getHealth() === 0 && fighter2.getHealth() === 0) {
      return 0;
    }
    if (fighter1.getHealth() === 0) {
      fighter2.addWin();
      fighter1.addLoss();
      console.log(`${fighter2.getName()} has won!`);
      return fighter1;
    }
    if (fighter2.getHealth() === 0) {
      fighter1.addWin();
      fighter2.addLoss();
      console.log(`${fighter1.getName()} has won!`);
      return fighter2;
    }
  }
};