import { useMemo } from "react";
import { Data } from "../types/data";

export const useActiveQuarters = (data?: Data) => {
  const quarters: boolean[] = useMemo(() => {
    let q = [false, false, false, false];
    if (!!data?.care.q1) {
      q[0] = true;
    }
    if (!!data?.care.q2) {
      q[1] = true;
    }
    if (!!data?.care.q3) {
      q[2] = true;
    }
    if (!!data?.care.q4) {
      q[3] = true;
    }
    return q;
  }, [data]);
  return quarters;
};

export default useActiveQuarters;
