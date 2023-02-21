import classNames from 'classnames';
import style from './Count.module.css';
export default function Count({ className }) {
    return (
        <div className={classNames(style.count, className)}>
            <button className={style.minus}>-</button>
            <p className={style.amount}>1</p>
            <button className={style.plus}>+</button>
        </div>
    );
}
