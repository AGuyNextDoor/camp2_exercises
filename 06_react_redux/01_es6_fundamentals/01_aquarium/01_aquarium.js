// Insert code here
class Aquarium {
   constructor(fish, algae){
    this.fishes = fish;
    this.algaes = algae;
    this.numberAlgae = 0;
    this.numberVegan = 0;
    this.numberCarnivor = 0;
  }

  addFish(fish){
    this.fishes.push({name: fish.name, sex: fish.sex, regime: fish.regime});

    if(fish.regime === "carnivorous"){this.numberCarnivor++;}
    if(fish.regime === "vegan"){this.numberVegan++;}
    // else{console.error("wrong input of regime. Add vegan or carnivorous");}
  }

  addAlgae(algae){
    this.algaes.push(algae);
    this.numberAlgae++;
  }

  endTurn(){
    console.log(this.listFish);
    console.log(this.numberAlgae);
    if(this.numberVegan < this.numberCarnivor){
      console.log("there are not enough veganFish for the Carnivorous");
    }
    else{
      this.fishes.pop();
    }

    if(this.numberAlgae < this.numberVegan){
      console.log("there are not enough Algae for the vegans");
    }
    else {
      this.algaes.length = 0;
    }
  }
}


class Fish {
  constructor(name, sex, regime){
    this.name = name;
    this.sex = sex;
    this.regime = regime;
  }
}

class Algae{
  constructor(size){
    this.length = size;
  }
}

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
