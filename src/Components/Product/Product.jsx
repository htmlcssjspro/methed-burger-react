import { useDispatch } from 'react-redux';
import Currency from '../Currency/Currency';
import { API_HOST } from '../../const';
import style from './Product.module.css';
import { addProduct } from '../../store/order/orderSlice';

export default function Product({ item }) {
    const dispatch = useDispatch();

    return (
        <article className={style.product}>
            <img className={style.image} src={`${API_HOST}/${item.image}`} alt={item.title} />
            <p className={style.price}>
                {item.price}
                <Currency />
            </p>
            <h3 className={style.title}>
                <button className={style.detail}>{item.title}</button>
            </h3>
            <p className={style.weight}>{`${item.weight}г`}</p>
            <button className={style.add} type="button"
                onClick={() => {
                    dispatch(addProduct({ id: item.id }));
                }}
            >Добавить</button>
        </article>
    );
}
