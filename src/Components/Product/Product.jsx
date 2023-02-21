import style from './Product.module.css';
import Currency from '../Currency/Currency';

export default function Product(props) {
    return (
        <article className={style.product}>
            <img className={style.image} src={props.img} alt={props.title} />
            <p className={style.price}>
                {props.price}
                <Currency />
            </p>
            <h3 className={style.title}>
                <button className={style.detail}>{props.title}</button>
            </h3>
            <p className={style.weight}>{`${props.weight}г`}</p>
            <button className={style.add}>Добавить</button>
        </article>
    );
}
