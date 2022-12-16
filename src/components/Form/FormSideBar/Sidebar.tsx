import { useLocation } from 'react-router-dom';
import BgSidebar from '../../../images/bg-sidebar-desktop.svg'
import BgSidebarMobile from '../../../images/bg-sidebar-mobile.svg'

import { navigations } from '../../../utils/navigations.utils'
import { useHandleResize } from './hooks/useHandleResize';

import './Sidebar.css'

type Navigations = {
    id: number;
    title: string;
    description: string;
    path: string;
    sideBar: boolean;
}

export default function Sidebar() {
    const navigationsData: Navigations[] = navigations;
    const location = useLocation();
    function isActiveLink(path: string) {
        return location.pathname === path ? 'active-link' : '';
    }

    const { mobileSize } = useHandleResize();

    return (
        <div className="form-sidebar col-sm-4 px-0">
            <img className="img-fluid w-100" src={!mobileSize ? BgSidebar : BgSidebarMobile} alt="sidebar-bg" />
            <ul className='form-navs'>
                {navigationsData.filter(navData => navData.sideBar).map(({ id, title, description, path }: Navigations) => (
                    <li key={title}>
                        <div className={"nav-number " + isActiveLink(path)}>
                            {id}
                        </div>
                        {!mobileSize && <div className="nav-description">
                            <p className='text-uppercase'>{title}</p>
                            <h6 className='text-uppercase'>{description}</h6>
                        </div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
