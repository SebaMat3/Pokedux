//src/components/PokemonCard.jsx
import { Card } from "antd";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({ name, image, types, id }) => {
    const dispatch = useDispatch();
    const typesString = types.map((elem) => elem.type.name).join(', ');
    
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
            extra={<StarButton isFavorite onClick={handleOnFavorite}/>}
        >
            <Card.Meta
                description={typesString}
            />

        </Card>
    )
}

export default PokemonCard;