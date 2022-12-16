import { ReactNode } from "react";
import FormsContentLayout from "./FormsContentLayout";

import formContents from "../../utils/formscontent";


type Contents = {
    id: number;
    header: string;
    subheader: string;
}

type Props = {
    components: ReactNode;
    contentId: Number;
}

const ContentLayout = ({ components, contentId }: Props) => {
    const contents: Contents | undefined = formContents.find(c => c.id === contentId);

    if (!contents) return <>Cannot Find the content. Please contact support</>;

    return (
        <FormsContentLayout
            header={contents.header}
            subheader={contents.subheader}
        >
            {components}
        </FormsContentLayout>
    )
}

export default ContentLayout;