import Currency from '../Currency/Currency';
import OrderItem from './OrderItem';
import burger from '../../assets/img/burger1.jpg';
import style from './Order.module.scss';

const orderList = [
    { title: 'Супер сырный' },
    { title: 'Картошка фри' },
    { title: 'Жгучий хот-дог' },
];

export default function Order() {
    return (
        <aside className={style.order}>
            <div className={style.header}>
                <h2 className={style.title}>Корзина</h2>
                <span className={style.count}>0</span>
            </div>
            <div className={style.content}>
                <ul className={style.list}>
                    {orderList.map(item => (
                        <li className={style.item}>
                            <OrderItem title={item.title} image={burger} weight="512" price="550" />
                        </li>
                    ))}
                </ul>
                <div className={style.total}>
                    <p>Итого</p>
                    <p>
                        <span className={style['total-amount']}>0</span>
                        <Currency />
                    </p>
                </div>
                <button className={style.submit}>Оформить заказ</button>
                <p className={style.appeal}>Бесплатная доставка</p>
            </div>
        </aside>
    );
}
