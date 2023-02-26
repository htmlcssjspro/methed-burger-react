import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import style from './ModalDelivery.module.scss';
import { closeModal } from '../../store/modal/modalSlice';
import { changeTouch, submitForm, updateFormValue, validateForm } from '../../store/form/formSlice';

export default function ModalDelivery() {
    const { orderList } = useSelector(state => state.order);
    const { isOpen } = useSelector(state => state.modal);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const closeOverlay = ({ target, currentTarget }) => {
        if (target === currentTarget) {
            dispatch(closeModal());
        }
    };
    const close = () => {
        dispatch(closeModal());
    };
    const handleInputChange = e => {
        dispatch(updateFormValue(
            {
                field: e.target.name,
                value: e.target.value,
            }
        ));

        dispatch(changeTouch());
        dispatch(validateForm());
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(validateForm());
        dispatch(submitForm({ ...form, orderList }));
    };

    return isOpen && (
        <div
            className={style.modal}
            onClick={closeOverlay}
        >
            <div className={style.mdelivery}>
                <div className={style.container}>
                    <h2 className={style.title}>Доставка</h2>

                    <form className={style.form} id='delivery' onSubmit={handleSubmit}>
                        <fieldset className={style.fieldset}>
                            <input
                                className={style.input}
                                type='text'
                                name='name'
                                value={form.name}
                                placeholder='Ваше имя'
                                onChange={handleInputChange}
                            />
                            <input
                                className={style.input}
                                type='tel'
                                name='phone'
                                value={form.phone}
                                placeholder='Телефон'
                                onChange={handleInputChange}
                            />
                        </fieldset>

                        <fieldset className={style.fieldset_radio}>
                            <label className={style.label}>
                                <input
                                    className={style.radio}
                                    type='radio'
                                    name='format'
                                    defaultValue='pickup'
                                    checked={form.format === 'pickup'}
                                    onChange={handleInputChange}
                                />
                                <span>Самовывоз</span>
                            </label>

                            <label className={style.label}>
                                <input
                                    className={style.radio}
                                    type='radio'
                                    name='format'
                                    defaultValue='delivery'
                                    checked={form.format === 'delivery'}
                                    onChange={handleInputChange}
                                />
                                <span>Доставка</span>
                            </label>
                        </fieldset>

                        {form.format === 'delivery' && (
                            <fieldset className={style.fieldset}>
                                <input
                                    className={style.input}
                                    type='text'
                                    name='address'
                                    value={form.address}
                                    placeholder='Улица, дом, квартира'
                                    onChange={handleInputChange}
                                />
                                <input
                                    className={classNames(style.input, style.input_half)}
                                    type='number'
                                    name='floor'
                                    value={form.floor}
                                    placeholder='Этаж'
                                    onChange={handleInputChange}
                                />
                                <input
                                    className={classNames(style.input, style.input_half)}
                                    type='number'
                                    name='intercom'
                                    value={form.intercom}
                                    placeholder='Домофон'
                                    onChange={handleInputChange}
                                />
                            </fieldset>
                        )}

                    </form>

                    <button className={style.submit} type='submit' form='delivery'>Оформить</button>
                </div>

                <button className={style.modal__close} type='button' onClick={close} >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <rect
                            x='5.07422'
                            y='5.28247'
                            width='1'
                            height='20'
                            transform='rotate(-45 5.07422 5.28247)'
                        />
                        <rect
                            x='5.78125'
                            y='19.4246'
                            width='1'
                            height='20'
                            transform='rotate(-135 5.78125 19.4246)'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}