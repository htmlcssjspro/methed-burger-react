import { wrapper } from './Wrapper.module.scss';
import classNames from 'classnames';

export default function Wrapper({ className, children }) {
    return (
        <div className={classNames(wrapper, className)}>
            {children}
        </div>
    );
}
