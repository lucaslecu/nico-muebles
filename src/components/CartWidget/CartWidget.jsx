import { Cart3 } from 'react-bootstrap-icons';

const CartWidget=() => {
    return(
        <div>
        <Cart3 color="royalblue" size={20} />
        <span>5</span>
        </div>
    );
};

export default CartWidget;