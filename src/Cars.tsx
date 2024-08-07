import { FormEvent, useState } from "react";
import { Car } from "./Car";
import { v4 as uuidv4 } from "uuid";

type Mode = `list` | `creating`;

export const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [mode, setMode] = useState<Mode>(`list`);
  const [newCar, setNewCar] = useState<Car>({ id: uuidv4(), bodyType: `sedan`, name: `` });
  const openForm = () => setMode(`creating`);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newCar.name !== ``) {
      setCars(Car.add(newCar, cars));
    }
    setNewCar({ id: uuidv4(), bodyType: `sedan`, name: `` });
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
            <tr key={item.id}>
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
          onChange={event => setNewCar({ ...newCar, name: event.target.value })}
        />
        <button type="submit">Save</button>
      </fieldset>
    </form>
  );
};
