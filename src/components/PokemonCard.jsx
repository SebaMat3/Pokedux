//src/components/PokemonCard.jsx
import { Card } from "antd";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({ name, image, abilities, types, id, favorite }) => {
    const dispatch = useDispatch();
    const typesString = types.map((elem) => elem.type.name).join(', ');
    const abilitiesString = abilities.map(ability => ability.ability.name).join(', ');

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId:id }))
    }
    return (
        <Card
            title={name}
            cover={
                <img 
                    alt={name} 
                    src={image} 
                />
            }
            extra={<StarButton isFavorite={ favorite } onClick={ handleOnFavorite }/>}
        >
            <Card.Meta
                description={
                    <>  
                        <b>TYPES:</b> {typesString}
                        <br />
                        <b>SKILLS:</b> {abilitiesString}
                    </>
                }
            />

        </Card>
    )
}

export default PokemonCard;