import { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TRAITS } from "../../graphql/queries";

const loadingData = { race: [] };

const TraitContext = createContext();

const TraitProvider = ({ children }) => {
  const { loading, data, error } = useQuery(GET_TRAITS, {
    // fetchPolicy: "cache-first",
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (error) console.error(error);

  return (
    <TraitContext.Provider
      value={{ traits: data?.GetAllTraits || loadingData, loading }}
    >
      {children}
    </TraitContext.Provider>
  );
};

export { TraitContext, TraitProvider };
