import { render, screen, waitFor } from "@testing-library/react";
import TestComponent from "./TestComponent";
import userEvent from "@testing-library/user-event";
import { callApiMock } from "../../services/test-service";

type Props = {
  showButton: boolean;
};

jest.mock("../../services/test-service", () => {
  return {
    callApiMock: jest.fn(),
  };
});

describe("TestComponent", () => {
  let props: Props = {
    showButton: true,
  };

  let container: any;
  beforeEach(() => {
    container = render(<TestComponent showButton={props.showButton} />);
  });

  it("Component renders", () => {
    expect(container).toBeTruthy();
    screen.getByText("Test Component");
  });

  it("Verify button", async () => {
    if (props.showButton) {
      const button = screen.getByRole("button", { name: "Registrar" });
      userEvent.click(button);

      await waitFor(() => {
        expect(callApiMock).toHaveBeenCalledTimes(2);
      });
    }
  });
});
