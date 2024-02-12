import { useEffect, useMemo, useState } from "react";
import { Character } from "../components/home/CharactersList/CharactersList";

const API_URL = "https://hp-api.onrender.com/api/characters";

export const useFetchHarryPotterCharacters = () => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCharacters = useMemo(
    () => async () => {
      setLoading(true);

      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setLoading(false);

        if (!data || !data?.length) {
          return;
        }

        setData(data);
      } catch (error) {
        console.error("Error fetching Harry Potter characters", error);

        setError(true);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { data, loading, error };
};
