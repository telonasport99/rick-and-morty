import {API} from "assets/api/api";
import {CharacterType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {Header} from "components/Header/Header";
import Image from "next/image";

export const getStaticProps = async ()=>{
    const locations = await API.rickAndMorty.getLocations()
    return {
        props:{
            locations
        }
    }
}
type PropsType = {
    locations:ResponseType<CharacterType>
}
const Locations = (props:PropsType) =>{
    const {locations} = props
    const locationsList = locations.results.map(location=>(
        <div key={location.id}>{location.name}</div>
    ))
    return(
        <PageWrapper>
            <Header/>
            {locationsList}
        </PageWrapper>
    )
}
export default Locations