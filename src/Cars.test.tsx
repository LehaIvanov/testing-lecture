import { render, screen, fireEvent } from "@testing-library/react";
import { Cars } from "./Cars";
import "@testing-library/jest-dom";

test(`displays title and creating car button`, () => {
  // arrange
  render(<Cars />);

  // act assert
  expect(screen.getByText(`Cars list`)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /add car/i })).toBeInTheDocument();
  expect(screen.queryByTitle("New car")).not.toBeInTheDocument();
});

test(`opens form`, async () => {
  // arrange
  render(<Cars />);

  // act
  fireEvent.click(screen.getByRole("button", { name: /add car/i }));

  // assert
  expect(screen.getByText("New car")).toBeInTheDocument();
  expect(screen.getByLabelText("Name:")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
});

test(`adds car`, async () => {
  // arrange
  render(<Cars />);

  // act
  fireEvent.click(screen.getByRole("button", { name: /add car/i }));
  fireEvent.change(screen.getByLabelText("Name:"), { target: { value: "Audi A5" } });
  fireEvent.click(screen.getByRole("button", { name: /save/i }));

  // assert
  expect(screen.queryByTitle("New car")).not.toBeInTheDocument();
  expect(screen.getByText("Audi A5")).toBeInTheDocument();
});
