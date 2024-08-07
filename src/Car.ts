type BodyType = `coupe` | `hatchback` | `SUV` | `crossover` | `sedan` | `wagon` | `pickup-truck`;

export type Car = {
  name: string;
  bodyType: BodyType;
};

const add = (car: Car, cars: Car[]) => {
  if (cars.some(item => item.name === car.name)) {
    return [...cars];
  }

  return [...cars, car];
};

export const Car = { add };
