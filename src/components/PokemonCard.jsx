import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
//import { Meta } from "antd/lib/card/Meta";

const PokemonCard = ({ name, image }) => {
    console.log(`PokemonCard: ${name}`);
    
    return (
        <Card
            title={name}
            cover={
                <img 
                    alt={name} 
                    src={image} 
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