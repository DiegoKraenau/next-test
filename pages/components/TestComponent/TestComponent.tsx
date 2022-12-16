import { callApiMock } from "../../services/test-service";

type Props = {
  showButton: boolean;
};

export function TestComponent({ showButton }: Props) {
  const pruebaFunction = () => {
    console.log("Marikon");
  };

  return (
    <div>
      <div>Test Component</div>
      {showButton && <button onClick={() => callApiMock()}>Registrar</button>}
    </div>
  );
}

export default TestComponent;
