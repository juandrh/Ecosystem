// Adaptation of:
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Evolution EcoSystem
// A collection of food in the world

class Food {


  constructor(num) {
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.food = [];
    for (let i = 0; i < num; i++) {
      this.foodMesh = BABYLON.Mesh.CreateBox("box", 2, scene);
      this.foodMesh.position.x = Math.random() * 120 - 60;
      this.foodMesh.position.z = Math.random() * 120 - 60;
      //this.foodMesh.position.y= 5;
      this.foodMesh.material = myMaterial;
      this.food.push(this.foodMesh);
    }
  }

  // Add new food item
  addFood() {
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.foodMesh = BABYLON.Mesh.CreateBox("box", 2, scene);
    this.foodMesh.position.x = Math.random() * 120 - 60;
    this.foodMesh.position.z = Math.random() * 120 - 60;
    //this.foodMesh.position.y= 5;
    this.foodMesh.material = myMaterial;
    this.food.push(this.foodMesh);

  }

  eatFood(i) {
    this.food[i].dispose();
    this.food.splice(i, 1);
    this.addFood();
  }

  // Return the list of food
  getFood() {
    return this.food;
  }

  getFoodLength() {
    return this.food.length;
  }

  getFoodPosition(i) {
    return new BABYLON.Vector2(this.food[i].position.x, this.food[i].position.z);
  }
}