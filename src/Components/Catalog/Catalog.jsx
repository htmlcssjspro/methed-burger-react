import Container from '../Container/Container';
import Order from '../Order/Order';
import Product from '../Product/Product';
import style from './Catalog.module.css';

import burger from '../../assets/img/burger6.jpg';


export default function Catalog(props) {
    return (
        <section className={style.catalog}>
            <Container className={style.container}>
                <Order className={style.order} />
                <div className={style.wrapper}>
                    <h3 className={style.title}>Бургеры</h3>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <Product title='Мясная бомба' img={burger} price='685' weight='520' />
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}
