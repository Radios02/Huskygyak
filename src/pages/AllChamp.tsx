import { useEffect, useState } from "react";
import apiClient from "../apiClient";

function AllChamp(){
    const [champs, setChamps] = useState<Array<Champ>>([]);

    useEffect(() => {
        apiClient
        .get("/champions")
    };[]);
}


export default AllChamp;