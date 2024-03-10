import {API} from "assets/api/api";
import { EpisodeType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {Header} from "components/Header/Header";

export const getServerSideProps = async ()=>{
    const episodes = await API.rickAndMorty.getEpisodes()
    if(!episodes){
        return {
            notFound:true
        }
    }
    return {
        props:{
            episodes
        }
    }
}
type PropsType = {
    episodes:ResponseType<EpisodeType>
}
const Episodes = (props:PropsType) =>{
    const {episodes} = props
    const episodesList = episodes.results.map(episode=>(
        <div key={episode.id}>{episode.name}</div>
    ))
    return(
        <PageWrapper>
            <Header/>
            {episodesList}
        </PageWrapper>
    )
}
export default Episodes