import { useDispatch } from 'react-redux';
import Currency from '../Currency/Currency';
import { API_HOST } from '../../const';
import { addProduct } from '../../store/order/orderSlice';
import style from './Product.module.css';

export default function Product({ item }) {
    const dispatch = useDispatch();
    const add = () => {
        dispatch(addProduct({ id: item.id }));
    };

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
                onClick={add}
            >Добавить</button>
        </article>
    );
}
