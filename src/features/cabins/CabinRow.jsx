import { TableRow, Img, Cabin, Price, Discount } from "./CabinRow-Styles";

import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";

const CabinRow = ({ cabin }) => {
  const {
    name,
    maxCapacity,
    regularPrice,
    id: cabinId,
    discount,
    image,
  } = cabin;

  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      alert("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return (
    <TableRow role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button onClick={() => mutate(cabinId)} disabled={isDeleting}>
        Delete
      </button>
    </TableRow>
  );
};

export default CabinRow;
