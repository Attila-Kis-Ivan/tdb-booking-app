import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export const useRecentStays = () => {
  const [searchparams] = useSearchParams();
  const numDays = !searchparams.get("last")
    ? 7
    : Number(searchparams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmedStayes = stays?.filter(
    (stay) => stay.status === "chacked-in" || "checked-out"
  );

  return { isLoading, stays, confirmedStayes, numDays };
};
