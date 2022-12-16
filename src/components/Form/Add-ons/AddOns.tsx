import CheckMarkIcon from '../../../images/icon-checkmark.svg'
import addOns from '../../../utils/addons.utils';
import { useFormSubmission } from '../hooks/useFormSubmission';
import NavigationButtons from '../NavigationButtons/NavigationButtons';

import { useAddsOnsSelection } from './hooks/useAddsOnsSelection';
import { useSelector } from 'react-redux';
import { PlansRootState } from '../../../models/planSelectionForm/PlanState';
import { AddsOnData } from '../../../models/form/AddOnsModel';

import { priceTag } from '../utils/utils';

import './AddOns.css';


const addOnsData: AddsOnData[] = addOns;

export default function AddOns() {
    const { activeClass, handleSelection, selectedAddsOns, saveChange } = useAddsOnsSelection();
    const { handleSubmit } = useFormSubmission('step-3', saveChange);

    const planType = useSelector((state: PlansRootState) => state.plans.planType);

    return (
        <form onSubmit={handleSubmit}>
            <div className='row row-cols-1 gy-3'>
                {addOnsData.map(({ title, description, montlyPrice }) => (
                    <div key={title} className="col">
                        <div className={"card add-ons-card rounded-lg p-3 " + activeClass(title)}>
                            <label className='checkbox-wrapper'>
                                <input type="checkbox" name="add-ons-checkbox" className='checkbox' checked={selectedAddsOns(title)} onChange={() => handleSelection(title)} />
                                <div className="checkmark" >
                                    <img src={CheckMarkIcon} alt="checkmark-svg" />
                                </div>
                            </label>
                            <div className="add-ons-contents">
                                <h6 className='pb-1'>{title}</h6>
                                <p className='text-muted'>{description}</p>
                            </div>
                            <div className="add-ons-price">
                                {priceTag(montlyPrice, planType)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <NavigationButtons />
        </form>

    )
}
