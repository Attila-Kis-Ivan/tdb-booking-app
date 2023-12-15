import Button from "../../ui/Button-Styles";
import { useCheckout } from "./useCheckout";

const CheckoutButton = ({ bookingId }) => {
  const { checkout, isChekingOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isChekingOut}
    >
      Check out
    </Button>
  );
};

export default CheckoutButton;
