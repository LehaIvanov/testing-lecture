import { render, screen } from "@testing-library/react";
import { App } from "./App";

test(`displays world greeting`, () => {
  // arrange
  render(<App />);

  // act assert
  expect(screen.getByText(`Hello, world`)).toBeDefined();
});
