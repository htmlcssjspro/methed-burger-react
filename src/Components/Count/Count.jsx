import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { addProduct, removeProduct } from '../../store/order/orderSlice';
import style from './Count.module.scss';

export default function Count({ className, id, count }) {
    const dispatch = useDispatch();


    return (
        <div className={classNames(style.count, className)}>
            <button
                className={style.minus}
                onClick={() => { dispatch(removeProduct({ id })); }}
            >-</button>
            <p className={style.amount}>{count}</p>
            <button
                className={style.plus}
                onClick={() => { dispatch(addProduct({ id })); }}
            >+</button>
        </div>
    );
}
