import Image, {StaticImageData} from "next/image";
import {CharacterStatusType} from "assets/api/rick-and-morty-api";

type PropsType = {
    src:StaticImageData
}
export const Status = (props:PropsType)=>{
    const {src} =props
    return(
        <>
            <Image src={src} alt={'alive'} width={20} height={20}/>
        </>
    )
}