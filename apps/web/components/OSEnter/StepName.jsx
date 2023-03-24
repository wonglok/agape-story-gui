import { useWizard } from "react-use-wizard";

export const StepName = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    console.log("done");
  });

  return (
    <>
      <div>123</div>
      <button onClick={() => previousStep()}>Previous ⏮️</button>
      <button onClick={() => nextStep()}>Next ⏭</button>
    </>
  );
};
