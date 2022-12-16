import { useLocation, useNavigate } from 'react-router-dom';

import steps from '../../../utils/step-naviation';

import './NavigationButtons.css';

type Props = {
  disabled?: boolean;
}

type LocationloactionState = {
  to?: string | null;
  back?: string | null;
  nextStep?: string | null;
  finalStep?: boolean;
  previousStep: string | null;
}

export default function NavigationButtons({ disabled = false }: Props) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const loactionState: LocationloactionState | undefined = steps.find(step => step.name === state?.name);

  const isFinalStep = !!loactionState?.finalStep;
  const btnClass = isFinalStep ? 'final-step' : '';
  const btnName = isFinalStep ? 'Confirm' : 'Next step';

  const soleBtn = !!loactionState?.previousStep ? '' : 'sole-button';

  return (
    <div className={'navigation-buttons ' + soleBtn}>
      {loactionState?.back &&
        <button
          className="nav-btn text-capitalize user-select-none"
          onClick={() => navigate(loactionState.back || '', { state: { name: loactionState.previousStep } })}>
          Go back
        </button>
      }
      <button disabled={disabled} type='submit' className={"btn btn-navigate text-capitalize user-select-none " + btnClass}>
        {btnName}
      </button>
    </div>
  )
}
