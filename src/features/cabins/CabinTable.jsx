import Spinner from "../../ui/Spinner";
import { Table, TableHeader } from "./CabinTable-Styles";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
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
