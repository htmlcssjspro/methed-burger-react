import style from './Container.module.css';
import classNames from 'classnames';

export default function Container({ children, className }) {
    return (
        <div className={classNames(style.container, className)}>
            {children}
        </div>
    );
}
