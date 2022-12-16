import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddOnsRootState } from "../../../../models/addOnsForm/addOnsState";
import { updateAddOns } from "../../../../store/features/forms/addsOnReducer";

export function useAddsOnsSelection() {
    const { addOns } = useSelector((state: { addOns: AddOnsRootState }) => state.addOns);
    const dispatch = useDispatch();

    const [addsOnsSelection, setAddsOnsSelection] = useState<String[]>(addOns);

    function handleSelection(selection: string) {
        const slected = addsOnsSelection.find(addOn => addOn === selection);

        if (slected) {
            setAddsOnsSelection(addsOnsSelection.filter(addOn => addOn !== selection))
        } else {
            setAddsOnsSelection([...addsOnsSelection, selection]);
        }
    }

    function selectedAddsOns(selection: string) {
        return addsOnsSelection.includes(selection);
    }

    function saveChange() {
        dispatch(updateAddOns(addsOnsSelection));
    }

    const activeClass = (selection: string) => selectedAddsOns(selection) ? 'active-selection' : ''

    return { activeClass, handleSelection, selectedAddsOns, saveChange }
}