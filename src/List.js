import { useEffect, useState } from "react";
import { Link } from "react-router";

function List({ items }) {

    if (!items) {
        return <p>No items to display.</p>;
    }

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default List;