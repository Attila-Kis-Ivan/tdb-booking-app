import { TableRow, Img, Cabin, Price, Discount } from "./CabinRow-Styles";

import { formatCurrency } from "../../utils/helpers";
const CabinRow = ({ cabin }) => {
  const { name, maxCapacity, regularPrice, discount, image } = cabin;
  return (
    <TableRow role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button>delete</button>
    </TableRow>
  );
};

export default CabinRow;
