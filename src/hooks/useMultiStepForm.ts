import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const isFisrtStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1

	const next = () => {
		setCurrentStepIndex((index: number) => {
			if (index >= steps.length - 1) return index;
			return index + 1;
		});
	};

	const back = () => {
    setCurrentStepIndex((index: number) => {
			if (index <= 0) return index;
			return index - 1;
		});
  };

	const gotTo = (index: number) => {
		setCurrentStepIndex(index);
	};

	return {
    numberOfSteps: steps.length, // return the same passed steps for comodity
		currentStepIndex,
		step: steps[currentStepIndex],
    isFisrtStep,
    isLastStep,
    next,
    back,
    gotTo,
	};
}
