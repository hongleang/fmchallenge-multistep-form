export type YearlyBenefits = {
    freeMonth: number;
    discountRate: number;
}

export type PlansType = {
    id: number,
    title: string;
    monthlyPrice: number;
    yearlyBenifits?: YearlyBenefits | undefined;
    icon?: string;
}