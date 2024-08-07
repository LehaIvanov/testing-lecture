import { Car } from "./Car";

describe(`Car`, () => {
  describe(`add`, () => {
    const bmwM5: Car = { name: `BMW M5`, bodyType: `sedan` };

    it(`adds entity to the collection and returns it`, () => {
      expect(Car.add(bmwM5, [])).toEqual([bmwM5]);
    });
    it(`doesn't add a car which is already in collection`, () => {
      const cars = [bmwM5];
      expect(Car.add(bmwM5, cars)).toEqual([bmwM5]);
    });
  });
});
