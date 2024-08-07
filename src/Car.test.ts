import { Car } from "./Car";

describe(`Car`, () => {
  describe(`add`, () => {
    const bmwM5: Car = { id: `1`, name: `BMW M5`, bodyType: `sedan` };

    it(`adds entity to the collection and returns it`, () => {
      expect(Car.add(bmwM5, [])).toEqual([bmwM5]);
    });
    it(`returns new collection`, () => {
      const collection: Car[] = [];
      expect(Car.add(bmwM5, collection)).not.toBe(collection);
    });
    it(`doesn't add a car which is already in collection`, () => {
      const cars = [bmwM5];
      expect(Car.add({ ...bmwM5 }, cars)).toEqual([bmwM5]);
    });
    it(`doesn't add a car with empty name`, () => {
      expect(Car.add({ ...bmwM5, name: `` }, [])).toEqual([]);
    });
  });
});
