import ArcadeIcon from '../images/icon-arcade.svg'
import AdvancedIcon from '../images/icon-advanced.svg'
import ProIcon from '../images/icon-pro.svg'

const plans = [
    {
        id: 1,
        title: 'Arcade',
        monthlyPrice: 9,
        yearlyBenifits: {
            freeMonth: 2,
            discountRate: 0            
        },
        icon: ArcadeIcon
    },
    {
        id: 2,
        title: 'Advanced',
        monthlyPrice: 12,
        yearlyBenifits: {
            freeMonth: 2,
            discountRate: 0            
        },
        icon: AdvancedIcon
    },
    {
        id: 3,
        title: 'Pro',
        monthlyPrice: 15,
        yearlyBenifits: {
            freeMonth: 2,
            discountRate: 0            
        },
        icon: ProIcon
    }
];

export default plans;