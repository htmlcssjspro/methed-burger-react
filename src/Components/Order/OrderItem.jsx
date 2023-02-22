import style from './OrderItem.module.css';
import Count from '../Count/Count';
import Currency from '../Currency/Currency';

export default function OrderItem(props) {
    return (
        <>
            <img className={style.image} src={props.image} alt={props.title} />
            <div className={style.product}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.weight}>{`${props.weight}г`}</p>
                <p className={style.price}>
                    {props.price}
                    <Currency />
                </p>
            </div>
            <Count className={style.count} count={2} />
        </>
    );
}
