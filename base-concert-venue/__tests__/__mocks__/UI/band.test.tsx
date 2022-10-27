import { render, screen } from "@testing-library/react";
import BandComponent from "@/pages/bands/[bandId]";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";

test("band component displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /The Wandering Bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("Error message displays", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={"test error"} />);

  const error = screen.getByRole("heading", {
    name: /test error/i,
  });
  expect(error).toBeInTheDocument();
});
