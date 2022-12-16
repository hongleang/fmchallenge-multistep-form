import { useSelector } from 'react-redux';
import { RootState } from '../../../models/rootState/rootState';

import { PlansType } from '../../../models/form/PlanModel';

import plansData from '../../../utils/plans.utils';
import addOnsData from '../../../utils/addons.utils';

import { calculateTotal, priceTag } from '../utils/utils';
import { AddsOnData } from '../../../models/form/AddOnsModel';
import { useNavigate } from 'react-router-dom';

import NavigationButtons from '../NavigationButtons/NavigationButtons';
import { useFormSubmission } from '../hooks/useFormSubmission';

import './Summary.css'

export default function Summary() {
    const { plans, addOns } = useSelector((state: RootState) => state)

    const { selectedPlan, planType } = plans;

    const planInfo: PlansType | undefined = plansData.find((info: PlansType) => info.title === selectedPlan);
    const addOnsInfos: AddsOnData[] = addOnsData.filter((addOn: AddsOnData) => addOns.addOns.includes(addOn.title));

    const accumulatePrice = [planInfo?.monthlyPrice || 0, ...addOnsInfos.map(info => info.montlyPrice)];
    const totalPrice = calculateTotal(accumulatePrice || [], planType);

    const navigate = useNavigate();

    const { handleSubmit } = useFormSubmission('step-4');
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="card w-100">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-9">
                            <p className='fw-bold text-marine-blue mb-0'>{selectedPlan}{' '}({planType[0].toUpperCase()}{planType.substring(1)})</p>
                            <button className='change-plan-link text-muted' onClick={() => navigate('/form/step-2')}>Change</button>
                        </div>
                        <div className="col-3">
                            <p className='fw-bold text-marine-blue'>{priceTag(planInfo?.monthlyPrice, planType)}</p>
                        </div>
                    </div>
                    <hr className='my-4' />
                    {addOnsInfos.map(({ id, title, montlyPrice }) => (
                        <div key={title + id} className="row align-items-center">
                            <div className="col-9">
                                <p className='text-muted'>{title}</p>
                            </div>
                            <div className="col-3">
                                <p>{priceTag(montlyPrice, planType)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="row align-items-center p-3 mt-3">
                <div className="col-9">
                    <p className='text-muted'>Total (per {planType === 'monthly' ? 'month' : 'year'})</p>
                </div>
                <div className="col-3">
                    <p className='fw-bold text-purple-blue'>{priceTag(totalPrice, planType)}</p>
                </div>
            </div>
            <NavigationButtons />
        </form>
    )
}
