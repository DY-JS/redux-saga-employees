import React, { useEffect } from "react";
import { JOBS } from "../modules/endpoints";
import api from "../modules/api";
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "../modules/actions";

export default function Jobs() {
  const jobs = useSelector((state) => state.api[JOBS]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await api.fetch(JOBS); //api.fetch(JOBS)===api.fetch('baseURL'+'/jobs'); endpoints[endpoint]
      dispatch(apiActions.fetch(JOBS));
      dispatch(apiActions.fetchSuccess(JOBS, response));
    }
    try {
      fetchData();
    } catch (e) {
      dispatch(apiActions.fetchFailure(JOBS, e));
    }
  }, []);

  console.log(jobs);

  //   useEffect(() => {
  //     async function fetchData() {
  //     const response = await api.fetch(JOBS);//api.fetch(JOBS)===api.fetch('baseURL'+'/jobs'); endpoints[endpoint]
  //     console.log(response);
  // };
  //    fetchData();
  // }, []);

  return <div>Jobs</div>;
}
