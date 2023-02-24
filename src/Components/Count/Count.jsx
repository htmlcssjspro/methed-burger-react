import { useState } from 'react';
import classNames from 'classnames';
import style from './Count.module.scss';
export default function Count(props) {
    const [count, setCount] = useState(props.count);

    const plus = () => {
        setCount(count + 1);
    };
    const minus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className={classNames(style.count, props.className)}>
            <button className={style.minus} onClick={minus} disabled={count === 1}>-</button>
            <p className={style.amount}>{count}</p>
            <button className={style.plus} onClick={plus}>+</button>
        </div>
    );
}
