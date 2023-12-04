import { TableRow, Img, Cabin, Price, Discount } from "./CabinRow-Styles";
import CreateCabinForm from "./CreateCabinForm";

import { formatCurrency } from "../../utils/helpers";

import { useState } from "react";
import { useDeleteCabin } from "./useDeleteCabin";

const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const {
    name,
    maxCapacity,
    regularPrice,
    id: cabinId,
    discount,
    image,
  } = cabin;

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={() => setShowForm((show) => !show)}>Edit</button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

export default CabinRow;
