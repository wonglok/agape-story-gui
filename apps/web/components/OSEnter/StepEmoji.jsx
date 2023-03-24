import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useWizard } from "react-use-wizard";
import JSConfetti from "js-confetti";
import { useRef } from "react";

export const StepEmoji = () => {
  const refCanvas = useRef();

  const { handleStep, previousStep, nextStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {});

  return (
    <>
      {/* <Picker
        data={data}
        onClick={() => {
          //
          nextStep();
          let jsc = new JSConfetti({ canvas: refCanvas.current });
          jsc.addConfetti();
        }}
      ></Picker> */}
      <button onClick={() => previousStep()}>Previous ⏮️</button>
      <button onClick={() => nextStep()}>Next ⏭</button>
      {/*
      <canvas
        className=" fixed top-0 left-0 w-full h-full pointer-events-none"
        ref={refCanvas}
      ></canvas> */}
    </>
  );
};
