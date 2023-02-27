import Currency from '../Currency/Currency';
import Count from '../Count/Count';
import style from './OrderItem.module.scss';
import { apiImageURI } from '../../api';

export default function OrderItem({ item }) {
    return (
        // title={item.title} image={burger} weight="512" price="550"
        <>
            <img className={style.image} src={apiImageURI(item.image)} alt={item.title} />
            <div className={style.product}>
                <h3 className={style.title}>{item.title}</h3>
                <p className={style.weight}>{`${item.weight}г`}</p>
                <p className={style.price}>
                    {item.price}
                    <Currency />
                </p>
            </div>
            <Count className={style.count} id={item.id} count={item.count} />
        </>
    );
}
