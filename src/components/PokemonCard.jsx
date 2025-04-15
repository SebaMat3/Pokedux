import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
//import { Meta } from "antd/lib/card/Meta";

const PokemonCard = ({ name }) => {
    console.log(`PokemonCard: ${name}`);
    
    return (
        <Card
            title={name}
            cover={
                <img 
                    alt="Ditto" 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
                />
            }
            extra={<StarOutlined/>}
        >
            <Card.Meta
                description="Fire."
            />

        </Card>
    )
}

export default PokemonCard;