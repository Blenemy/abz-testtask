import { useEffect, useState } from "react";
import { getPositions } from "../api/getPositions";
import { Position } from "../components/CustomRadio/types/Position";

export const useGetPositions = () => {
  const [positions, setPosition] = useState<Position[] | []>([]);

  useEffect(() => {
    async function fetchPositions() {
      try {
        const response = await getPositions();
        setPosition(response.data.positions);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPositions();
  }, []);

  return { positions };
};
