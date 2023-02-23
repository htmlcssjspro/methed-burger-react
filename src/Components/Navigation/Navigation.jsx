import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice';
import style from './Navigation.module.scss';

export default function Navigation() {
    const { category, activeCategory } = useSelector(state => state.category);
    const dispatch = useDispatch();

    return (
        <nav className={style.navigation}>
            <ul className={style.list}>
                {category.map((item, i) => (
                    <li className={style.item}>
                        <button
                            className={classNames(
                                style.button,
                                style.button_burger,
                                activeCategory === i ? style.button_active : ''
                            )}
                            style={{ backgroundImage: `url(${item.image})` }}
                            onClick={() => {
                                dispatch(changeCategory({ indexCategory: i }));
                            }}
                        >
                            {item.rus}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
