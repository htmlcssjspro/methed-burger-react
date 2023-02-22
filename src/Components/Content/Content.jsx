import { content } from './Content.module.scss';
import classNames from 'classnames';

export default function Content({ className, children }) {
    return (
        <div className={classNames(content, className)}>
            {children}
        </div>
    );
}
