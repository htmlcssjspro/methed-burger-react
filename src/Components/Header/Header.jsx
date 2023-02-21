import style from './Header.module.css';
import sprite from '../../assets/img/sprite.svg';
import Container from '../Container/Container';

export default function Header(props) {
    return (
        <header className={style.header}>
            <Container className={style.header__container}>
                <svg className={style.header__logo}
                    role="img"
                    aria-label="Логотип компании YourMeal"
                    viewBox="0 0 199 44">
                    <use href={`${sprite}#logo`} />
                </svg>

                <div className={style['header__title-container']}>
                    <h1 className={style.header__title}>
                        Только самые
                        <span className={style['header__title-red']}>сочные бургеры!</span>
                    </h1>
                    <p className={style.header__appeal}>
                        Бесплатная доставка от 599
                        <span className="currency">₽</span>
                    </p>
                </div>
            </Container>
        </header>
    );
}
