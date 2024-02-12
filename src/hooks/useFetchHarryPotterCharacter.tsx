import { useEffect, useMemo, useState } from "react";
import { Character } from "../typings/typings";

const API_URL = "https://hp-api.onrender.com/api/character";

export const useFetchHarryPotterCharacter = (id?: string) => {
  const [data, setData] = useState<Character | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCharacter = useMemo(
    () => async () => {
      setLoading(true);

      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();

        setLoading(false);

        if (!data || !data?.length) {
          return;
        }

        setData(data[0]);
      } catch (error) {
        console.error("Error fetching Harry Potter character", error);

        setError(true);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchCharacter();
  }, []);

  return { data, loading, error };
};
