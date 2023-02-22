import classNames from 'classnames';
import style from './Navigation.module.scss';

export default function Navigation(props) {
    return (
        <nav className={classNames(style.navigation)}>
            <ul className={classNames('content', style.list)}>
                <li className={style.item}>
                    <button className={classNames(style.button, style.button_burger, style.button_active)}
                        data-category="burger">Бургеры</button>
                </li>
                <li className={style.item}>
                    <button className={classNames(style.button, style.button_snack)}
                        data-category="snack">Закуски</button>
                </li>
                <li className={style.item}>
                    <button className={classNames(style.button, style['button_hot-dog'])}
                        data-category="hot-dog">Хот-доги</button>
                </li>
                <li className={style.item}>
                    <button className={classNames(style.button, style.button_combo)}
                        data-category="combo">Комбо</button>
                </li>
                <li className={style.item}>
                    <button className={classNames(style.button, style.button_shawarma)}
                        data-category="shawarma">Шаурма</button>
                </li>
                <li className={style.item}>
                    <button className={classNames(style.button, style.button_pizza)}
                        data-category="pizza">Пицца</button>
                </li>
                <li className={style.item}>
                    <button className={classNames(style.button, style.button_wok)}
                        data-category="wok">Вок</button>
                </li>
                <li className={style.item}>
                    <button className={classNames(style.button, style.button_dessert)}
                        data-category="dessert">Десерты</button>
                </li>
                <li className={style.item}>
                    <button className={classNames(style.button, style.button_sauce)}
                        data-category="sauce">Соусы</button>
                </li>
            </ul>
        </nav>
    );
}
