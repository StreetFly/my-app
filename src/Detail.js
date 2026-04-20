import react from "react";
import { useParams } from "react-router";

const Detail = ({ items }) => {

    const { id } = useParams(); //string id

    const item = items.find(item => item.id === id);

    if (!item) {
        return <p>Item not found</p>;
    }

    return (
        <>
            <h2>Selected Item</h2>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            {item.data !== null && (
                <ul>
                    {Object.entries(item.data).map(([key, value]) => (
                        <li key={key}>{key}: {value}</li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Detail;