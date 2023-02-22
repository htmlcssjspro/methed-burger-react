import style from './Header.module.css';
import sprite from '../../assets/img/sprite.svg';
import Currency from '../Currency/Currency';
import Content from '../Content/Content';
import classNames from 'classnames';
import Navigation from '../Navigation/Navigation';

export default function Header() {
    return (
        <header className={classNames('container', style.header)}>
            <Content className={style.content}>
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
            </Content>
            <Navigation />
        </header>
    );
}
