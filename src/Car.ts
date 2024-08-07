const bodyTypes = [`coupe`, `hatchback`, `SUV`, `crossover`, `sedan`, `wagon`, `pickup-truck`] as const;

export type BodyType = (typeof bodyTypes)[number];

export type Car = {
  id: string;
  name: string;
  bodyType: BodyType;
};

const add = (car: Car, cars: Car[]) => {
  if (car.name === `` || cars.some(item => item.name === car.name)) {
    return [...cars];
  }

  return [...cars, car];
};

const isBodyType = (value: string): value is BodyType => bodyTypes.find((type: string) => type === value) !== undefined;

export const Car = { add, bodyTypes, isBodyType };
