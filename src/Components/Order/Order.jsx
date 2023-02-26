import Currency from '../Currency/Currency';
import OrderItem from './OrderItem';
import style from './Order.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { calcTotal, orderRequestAsync } from '../../store/order/orderSlice';
import { openModal } from '../../store/modal/modalSlice';
import classNames from 'classnames';

export default function Order() {
    const { totalCount, totalPrice, orderList, orderGoods } = useSelector(state => state.order);
    const [openOrder, setOpenOrder] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderRequestAsync());
    }, [orderList.length]);
    useEffect(() => {
        dispatch(calcTotal());
    }, [orderGoods]);

    return (
        <aside className={classNames(style.order, openOrder ? style.order_open : '')}>
            <div className={style.header} tabIndex="0" role="button"
                onClick={() => setOpenOrder(openOrder => !openOrder)}
            >
                <h2 className={style.title}>Корзина</h2>
                <span className={style.count}>{totalCount}</span>
            </div>
            <div className={style.content}>
                <ul className={style.list}>
                    {orderGoods.map(item => (
                        <li className={style.item} key={item.id}>
                            <OrderItem item={item} />
                        </li>
                    ))}
                </ul>
                <div className={style.total}>
                    <p>Итого</p>
                    <p>
                        <span className={style['total-amount']}>{totalPrice}</span>
                        <Currency />
                    </p>
                </div>
                <button
                    className={style.submit}
                    disabled={orderGoods.length === 0}
                    onClick={() => { dispatch(openModal()); }}
                >Оформить заказ</button>
                <p className={style.appeal}>Бесплатная доставка</p>
            </div>
        </aside>
    );
}
