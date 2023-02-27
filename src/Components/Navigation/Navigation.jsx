import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice';
import { apiImageURI } from '../../api';
import style from './Navigation.module.scss';

export default function Navigation() {
    const { category, categoryActive } = useSelector(state => state.category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryRequestAsync());
    }, []);

    return (
        <nav className={style.navigation}>
            <ul className={style.list}>
                {category.map((item, i) => (
                    <li className={style.item} key={item.title}>
                        <button
                            className={classNames(
                                style.button,
                                style.button_burger,
                                categoryActive === i ? style.button_active : ''
                            )}
                            style={{ backgroundImage: `url(${apiImageURI(item.image)})` }}
                            onClick={() => {
                                dispatch(changeCategory({ categoryIndex: i }));
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
