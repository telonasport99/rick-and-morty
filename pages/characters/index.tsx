import {API} from "assets/api/api";
import {CharacterType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {Header} from "components/Header/Header";
import Image from "next/image";
import {CharacterCard} from "components/Card/CharacterCard/CharacterCard";

export const getStaticProps = async ()=>{
    const characters = await API.rickAndMorty.getCharacters()
    return {
        props:{
            characters
        }
    }
}
type PropsType = {
    characters:ResponseType<CharacterType>
}
const Characters = (props:PropsType) =>{
    const {characters} = props
    const charactersList = characters.results.map(character=>(
        <CharacterCard key={character.id} character={character}/>
    ))
    return(
        <PageWrapper>
            <Header/>
            {charactersList}
        </PageWrapper>
    )
}
export default Characters