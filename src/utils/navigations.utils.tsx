import App from "../App";
import { AddOns, Form, Info, Plans, Summary, ThankYou } from "../components";
import { ContentLayout } from "../layout";

import ErrorPage from "../error-handling/ErrorPage";

import { RouteObject } from "react-router-dom";


const navigations = [
    { id: 1, title: 'Step 1', description: 'Your info', path: '/form/step-1', element: <ContentLayout components={<Info />} contentId={1} />, sideBar: true },
    { id: 2, title: 'Step 2', description: 'Select plan', path: '/form/step-2', element: <ContentLayout components={<Plans />} contentId={2} />, sideBar: true},
    { id: 3, title: 'Step 3', description: 'Add-ons', path: '/form/step-3', element: <ContentLayout components={<AddOns />} contentId={3} />, sideBar: true},
    { id: 4, title: 'Step 4', description: 'Summary', path: '/form/step-4', element: <ContentLayout components={<Summary />} contentId={4} />, sideBar: true },
    { id: 5, title: 'FinalStep', description: 'FinalPage', path: '/form/thank-you', element: <ThankYou/>, sideBar: false },
];


const navigationRoute: RouteObject[] = navigations.map(({ path, element }) => ({
    path,
    element,
}));


const browserRouter: RouteObject[] = [
    {
        path: "*",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/form",
        element: <Form />,
        children: navigationRoute
    }
];

export { navigations, browserRouter };

