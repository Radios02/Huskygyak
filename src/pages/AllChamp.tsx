import { useEffect, useState } from "react";
import apiClient from "../apiClient";
import type { Champ } from "../types/Champ";

function AllChamp() {
    const [champs, setChamps] = useState<Array<Champ>>([]);

    useEffect(() => {
        apiClient
        .get("/champions")
        .then((response) => setChamps(response.data))
        .catch((reason) => alert(reason));
    }, []);

    return (
        <>
            <h1>All Champions</h1>
            {champs.map((c)=>)(
                <p>
                    {c.name} - {c.role}
                </p>
            ))}
        </>
    );
}


export default AllChamp;