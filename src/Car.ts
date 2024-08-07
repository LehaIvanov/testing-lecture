type BodyType = `coupe` | `hatchback` | `SUV` | `crossover` | `sedan` | `wagon` | `pickup-truck`;

export type Car = {
  id: string;
  name: string;
  bodyType: BodyType;
};

const add = (car: Car, cars: Car[]) => {
  if (cars.some(item => item.name === car.name)) {
    return [...cars];
  }

  return [...cars, car];
};

const isValidCar = (value: Partial<Car>): value is Car =>
  value.bodyType !== undefined && value.id !== undefined && value.name !== undefined;

export const Car = { add, isValidCar };
