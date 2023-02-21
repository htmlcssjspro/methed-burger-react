import style from './Header.module.css';
import sprite from '../../assets/img/sprite.svg';
import Container from '../Container/Container';
import Currency from '../Currency/Currency';

export default function Header(props) {
    return (
        <header className={style.header}>
            <Container className={style.container}>
                <svg className={style.logo}
                    role="img"
                    aria-label="Логотип компании YourMeal"
                    viewBox="0 0 199 44">
                    <use href={`${sprite}#logo`} />
                </svg>

                <div className={style['title-container']}>
                    <h1 className={style.title}>
                        Только самые
                        <span className={style['title-red']}>сочные бургеры!</span>
                    </h1>
                    <p className={style.appeal}>
                        Бесплатная доставка от 599
                        <Currency />
                    </p>
                </div>
            </Container>
        </header>
    );
}
