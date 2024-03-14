import { Card } from "../Card";
import Image from "next/image";
import Link from "next/link";
import aliveStatus from "public/statuses/alive.png";
import deadStatus from "public/statuses/dead.png";
import unknownStatus from "public/statuses/unknown.png";
import {CharacterType} from '../../../assets/api/rick-and-morty-api';
import {Status} from "components/Card/CharacterCard/Status/Status";
import styled from "styled-components";

const statusImages = {
  Alive: aliveStatus,
  Dead: deadStatus,
  unknown: unknownStatus,
};

type PropsType = {
  character: CharacterType;
};

export const CharacterCard = (props: PropsType) => {
  const { id, name, image, status } = props.character;

  return (
    <Card name={name}>
        <Status  src={statusImages[status]}/>
      <Link href={`/characters/${id}`}>
        <ImageBlock src={image} alt={name} width={300} height={300}  />
      </Link>
    </Card>
  );
};

const ImageBlock = styled.img`
  object-fit: cover;
`;