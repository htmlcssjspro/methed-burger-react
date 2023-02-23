import classNames from 'classnames';
import { container } from '../Container/Container.module.scss';
import Wrapper from '../Wrapper/Wrapper';
import Content from '../Content/Content';
import Currency from '../Currency/Currency';
import Navigation from '../Navigation/Navigation';
import sprite from '../../assets/img/sprite.svg';
import style from './Header.module.scss';

export default function Header() {
    return (
        <header className={classNames(container, style.header)}>
            <Wrapper className={style.wrapper}>
                <Content className={style.logo}>
                    <svg viewBox="0 0 199 44" role="img" aria-label="Логотип компании YourMeal">
                        <use href={`${sprite}#logo`} />
                    </svg>
                </Content>

                <Content className={style.content}>
                    <h1 className={style.title}>
                        <span>Только самые</span>
                        <span className={style.title_red}>сочные бургеры!</span>
                    </h1>
                    <p className={style.appeal}>
                        Бесплатная доставка от 599
                        <Currency />
                    </p>
                </Content>
            </Wrapper>
            <Content>
                <Navigation />
            </Content>
        </header>
    );
}
