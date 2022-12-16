

import plansData from '../../../utils/plans.utils'
import NavigationButtons from '../NavigationButtons/NavigationButtons';

import { usePlanSelection } from './hooks/usePlanSelection';
import { useFormSubmission } from '../hooks/useFormSubmission';

import './Plans.css'
import { PlansType } from '../../../models/form/PlanModel';


export default function Plans() {
    const plans: PlansType[] = plansData;

    const { handlePlanChange, handleSelection, activeClass, planType, saveChange, noPlanSelected } = usePlanSelection();

    const { handleSubmit } = useFormSubmission('step-2', saveChange);

    return (
        <form onSubmit={handleSubmit}>
            <div className="row row-cols-3 gx-3">
                {plans.map(({ icon, title, monthlyPrice, yearlyBenifits }) => (
                    <div key={title} className="col">
                        <div className={`plan-card card rounded-lg ${activeClass(title)}`} onClick={() => handleSelection(title)}>
                            <div className="card-body">
                                <img className='plans-img' src={icon} alt={title} />
                                <div className="plan-description">
                                    <h6>{title}</h6>
                                    <p className='text-muted'>
                                        {planType === 'monthly' ? `${monthlyPrice}/mo` : yearlyBenifits
                                            ? `${(monthlyPrice * (12 - yearlyBenifits.freeMonth))}/yr`
                                            : 'undefined'}
                                    </p>
                                    {planType === 'yearly' && yearlyBenifits && (
                                        <p>{yearlyBenifits.freeMonth} month{yearlyBenifits.freeMonth > 0 && 's'} free</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='plan-selector'>
                <span className={planType === 'yearly' ? 'text-muted' : ''}>Monthly</span>
                <label className='toggle'>
                    <input onChange={(e) => { handlePlanChange(e) }}
                        type="checkbox"
                        className='toggle-checkbox'
                        name='toggle-checkbox'
                        checked={planType === 'yearly'} />
                    <div className="toggle-switch"></div>
                </label>
                <span className={planType === 'monthly' ? 'text-muted' : ''}>Yearly</span>
            </div>
            <NavigationButtons disabled={noPlanSelected ? true : false} />
        </form>

    )
}
