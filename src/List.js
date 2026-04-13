import { useEffect, useState } from "react";

function List() {

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.restful-api.dev/objects")
            .then(response => response.json())
            .then(data => {
                setItems(data);
                console.log("Fetched data:", data);
            })
            .catch(error => console.error("Error fetching data:", error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            
            <section>
                <h2>Items List</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {items.map(item => (
                            <li key={item.id}
                            onClick={() => setSelectedItem(item)}>
                            {item.name}
                            </li>
                        ))}
                    </ul>
                )}

                {!selectedItem && !loading && 
                <p>Please select an item.</p>
                }
            </section>

            {selectedItem && (
                <section>
                    <h2>Selected Item</h2>
                    <p>ID: {selectedItem.id}</p>
                    <p>Name: {selectedItem.name}</p>
                    {selectedItem.data !== null && (
                        <ul>
                            {Object.entries(selectedItem.data).map(([key, value]) => (
                                <li key={key}>{key}: {value}</li>
                            ))}
                        </ul>
                    )}
                </section>
            )}
        </div>
    );
}

export default List;