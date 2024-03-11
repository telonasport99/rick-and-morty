import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";

const NotFound = () =>{
    return(
    <PageWrapper>404 NON FOUND</PageWrapper>
    )
}
NotFound.getLayout  = getLayout
export default NotFound