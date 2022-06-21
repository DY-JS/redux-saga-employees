
import React, {useEffect} from "react";
 import { JOBS } from "../modules/endpoints";
 import  api from "../modules/api";

export default function Jobs() {
    useEffect(() => {
        async function fetchData() {
        const response = await api.fetch(JOBS);//api.fetch(JOBS)===api.fetch('baseURL'+'/jobs'); endpoints[endpoint]
        console.log(response);
    }
       fetchData();
  }, []);

    return(
        <div>
            Jobs
        </div>
    );
}
