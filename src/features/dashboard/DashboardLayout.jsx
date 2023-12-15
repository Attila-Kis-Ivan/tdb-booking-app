import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import { StyledDashboardLayout } from "./DashboardLayout-styles";
import SalesChart from "./SalesChart";

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
