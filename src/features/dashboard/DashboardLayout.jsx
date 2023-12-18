import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import { StyledDashboardLayout } from "./DashboardLayout-styles";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStayes, isLoading: isLoading2, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStayes={confirmedStayes}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStayes={confirmedStayes} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
