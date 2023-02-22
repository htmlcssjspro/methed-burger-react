import Order from '../Order/Order';
import Product from '../Product/Product';
import style from './Catalog.module.css';

import burger from '../../assets/img/burger6.jpg';
import classNames from 'classnames';

const goodsList = [
    { title: 'Мясная бомба' },
    { title: 'Супер сырный' },
    { title: 'Сытный' },
    { title: 'Итальянский' },
    { title: 'Вечная классика' },
    { title: 'Тяжелый удар' },
];

export default function Catalog() {
    return (
        <section className={style.catalog}>
            <div className={classNames('container', style.container)}>
                <Order className={style.order} />
                <div className={style.wrapper}>
                    <h3 className={style.title}>Бургеры</h3>
                    <ul className={style.list}>
                        {goodsList.map(item => (
                            <li className={style.item}>
                                <Product title={item.title} img={burger} price='685' weight='520' />
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </section>
    );
}
