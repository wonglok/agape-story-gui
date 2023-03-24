import { StepEmoji } from "./StepEmoji";
import { StepName } from "./StepName";
import { Wizard, useWizard } from "react-use-wizard";

export const Steps = () => (
  <Wizard>
    <StepName />
    <StepEmoji />
  </Wizard>
);
