import classNames from 'classnames';
import style from './Order.module.css';
import burger from '../../assets/img/burger1.jpg';
import Count from '../Count/Count';
import Currency from '../Currency/Currency';

export default function Order({ className }) {
    return (
        <div className={classNames(style.order, className)}>
            <aside className={style.wrapper}>
                <div className={style['wrap-title']}>
                    <h2 className={style.title}>Корзина</h2>
                    <span className={style.count}>0</span>
                </div>
                <div className={style['wrap-list']}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <img src={burger}
                                alt="Супер сырный"
                                className={style.image} />
                            <div className={style.product}>
                                <h3 className={style['product-title']}>Супер сырный</h3>
                                <p className={style['product-weight']}>512г</p>
                                <p className={style['product-price']}>550₽</p>
                            </div>
                            <Count className={style['product-count']} />
                        </li>
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
        </div>
    );
}
