function infoCar(manu, model) {
  return (car = {
    name: "Car",
    price: "1244.00",
    mafacturer: manu,
    modelName: model,
  });
}

const cars = infoCar("Suzuki", "Mehran");
console.log(cars);
