import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productRequestAsync } from '../../store/product/productSlice';
import Product from '../Product/Product';
import style from './Catalog.module.scss';

export default function Catalog() {
    const { products } = useSelector(state => state.product);
    const { category, categoryActive } = useSelector(state => state.category);
    const dispatch = useDispatch();
    useEffect(() => {
        if (category.length) {
            dispatch(productRequestAsync(category[categoryActive].title));
        }
    }, [category, categoryActive]);

    return (
        <main className={style.catalog}>
            <h3 className={style.title}>{category[categoryActive]?.rus}</h3>
            { products.length ? (
                <ul className={style.list}>
                    {products.map(item => (
                        <li className={style.item} key={item.id}>
                            <Product item={item} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={style.empty}>К сожалению товаров данной категории нет</p>
            )}

        </main>
    );
}
