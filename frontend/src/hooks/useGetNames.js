import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const useGetNames = () => {
  const [rowData, setRowData] = useState([]);
  const [paginationData, setPaginationData] = useState({});

  const getNames = useCallback(async (page) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-next-user-data?page=${page}`
      );

      setPaginationData(response.data.paginationData);
      setRowData(response.data.users);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getNames(1);
  }, [getNames]);

  return [rowData, paginationData, getNames];
};

export default useGetNames;
