import classNames from 'classnames';
import { container } from './Container.module.scss';

export default function Container({ className, children }) {
    return (
        <div className={classNames(container, className)}>
            {children}
        </div>
    );
}
