import classNames from 'classnames';
import { wrapper } from './Wrapper.module.scss';

export default function Wrapper({ className, children }) {
    return (
        <div className={classNames(wrapper, className)}>
            {children}
        </div>
    );
}
