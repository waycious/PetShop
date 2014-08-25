var app = {};
app.animals = [];
app.currentAnimal = 0;
document.getElementById("save").style.display = 'none';

app.Animal = function (name, type, breed, habitat, image) {
    this.name = name;
    this.type = type;
    this.breed = breed;
    this.habitat = habitat;
    this.image = image;
};

app.create = function () {
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var breed = document.getElementById("breed").value;
    var habitat = document.getElementById("habitat").value;
    var image = document.getElementById("image").value;
    var animal = new app.Animal(name, type, breed, habitat, image);
    app.animals.push(animal);
    app.currentAnimal = app.animals.length - 1;
    app.output(app.currentAnimal);

    document.getElementById("name").value = "";
    document.getElementById("type").value = "";
    document.getElementById("breed").value = "";
    document.getElementById("habitat").value = "";
    document.getElementById("image").value = "";
};
app.output = function (animalToShow) {
    var fragment = document.createDocumentFragment();

    var name = document.createElement("h3");
    var type = document.createElement("h4");
    var breed = document.createElement("h5");
    var image = document.createElement("img");
    var habitat = document.createElement("p");
    name.innerHTML = app.animals[animalToShow].name;
    type.innerHTML = app.animals[animalToShow].type;
    breed.innerHTML = app.animals[animalToShow].breed;
    image.setAttribute("src", app.animals[animalToShow].image);
    image.className = "img-responsive img-thumbnail";
    habitat.innerHTML = app.animals[animalToShow].habitat;
    
    fragment.appendChild(name);
    fragment.appendChild(type);
    fragment.appendChild(breed);
    fragment.appendChild(image);
    fragment.appendChild(habitat);

    document.getElementById("output").innerHTML = "";
    document.getElementById("output").appendChild(fragment);
};
app.next = function () {
    app.currentAnimal++;
    if (app.currentAnimal > app.animals.length - 1) {
        app.currentAnimal = app.animals.length - 1;
    }
    app.output(app.currentAnimal);
};
app.prev = function () {
    app.currentAnimal--;
    if (app.currentAnimal < 0) {
        app.currentAnimal = 0;
    }
    app.output(app.currentAnimal);
};

app.edit = function () {
    document.getElementById("name").value = app.animals[app.currentAnimal].name;
    document.getElementById("type").value = app.animals[app.currentAnimal].type;
    document.getElementById("breed").value = app.animals[app.currentAnimal].breed;
    document.getElementById("habitat").value = app.animals[app.currentAnimal].habitat;
    document.getElementById("image").value = app.animals[app.currentAnimal].image;
    document.getElementById("add").style.display = 'none';
    document.getElementById("save").style.display = '';
    document.getElementById("edit").style.display = 'none';
};
app.save = function () {
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var breed = document.getElementById("breed").value;
    var habitat = document.getElementById("habitat").value;
    var image = document.getElementById("image").value;
    app.animals[app.currentAnimal].name = name;
    app.animals[app.currentAnimal].type = type;
    app.animals[app.currentAnimal].breed = breed;
    app.animals[app.currentAnimal].habitat = habitat;
    app.animals[app.currentAnimal].image = image;
    app.output(app.currentAnimal);
    document.getElementById("save").style.display = 'none';
    document.getElementById("add").style.display = '';
    document.getElementById("edit").style.display = '';
};
app.delete = function () {
    document.getElementById("output").innerHTML = "";
    app.animals.splice(app.currentAnimal, 1);
    if (app.animals.length) {
        app.prev();
    }
};