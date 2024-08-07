import { FormEvent, useState } from "react";
import { BodyType, Car } from "./Car";
import { v4 as uuidv4 } from "uuid";

type Mode = `list` | `creating`;

const defaultCar = (): Car => ({
  id: uuidv4(),
  bodyType: `sedan`,
  name: ``,
});

const getBodyType = (value: string) => (Car.isBodyType(value) ? value : undefined);

export const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [mode, setMode] = useState<Mode>(`list`);
  const [newCar, setNewCar] = useState<Car>(defaultCar());
  const updateNewCar = (car: Partial<Car>) => setNewCar({ ...newCar, ...car });
  const openForm = () => setMode(`creating`);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCars(Car.add(newCar, cars));
    setNewCar(defaultCar());
    setMode(`list`);
  };

  return mode === `list` ? (
    <>
      <button onClick={openForm}>Add car</button>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Cars list</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(item => (
            <tr key={item.id} data-testid="table-row">
              <td>{item.name}</td>
              <td>{item.bodyType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <title>New car</title>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={newCar.name}
          onChange={event => updateNewCar({ name: event.target.value })}
        />
        <label htmlFor="bodyType">Body type:</label>
        <select id="bodyType" onChange={event => updateNewCar({ bodyType: getBodyType(event.target.value) })}>
          {Car.bodyTypes.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button type="submit">Save</button>
      </fieldset>
    </form>
  );
};
