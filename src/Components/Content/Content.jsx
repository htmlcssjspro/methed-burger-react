import classNames from 'classnames';
import { content } from './Content.module.scss';

export default function Content({ className, children }) {
    return (
        <div className={classNames(content, className)}>
            {children}
        </div>
    );
}
