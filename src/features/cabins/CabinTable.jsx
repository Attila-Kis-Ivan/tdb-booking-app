// import { Table, TableHeader } from "./CabinTable-Styles";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import { Table, TableHeader } from "./CabinTable-Styles";
import CabinRow from "./CabinRow";

const CabinTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
};

export default CabinTable;
