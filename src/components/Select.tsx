import * as React from 'react';

const Select = ({
    label,
    id,
    value,
    values,
    errors,
    touched,
    required,
    handleChange,
    handleBlur
}: SelectType): JSX.Element => {
    const elements = values.map(element => {
        return (
            <option
                key={element.value}
                value={element.value}
            >
                {element.displayValue}
            </option>
        );
    });
    return (
        <div className="form-group">
            {label && (<label htmlFor={id}>{label}</label>)}
            <select
                className="form-control"
                name={id}
                id={id}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                required={required}
            >
                {elements}
            </select>
            {errors[id] && touched[id] && (
                <div className="form-field-error">{errors[id]}</div>
            )}
        </div>
    );
};

type SelectType = {
    readonly id: string;
    readonly handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    readonly handleBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
    readonly values: {value: string; displayValue: string}[];
    readonly label: string;
    readonly value: string;
    readonly errors: object;
    readonly touched: object;
    readonly required: boolean;
};

Select.defaultProps = {
    id: '',
    handleChange: (): void => {},
    handleBlur: (): void => {},
    label: '',
    value: '',
    values: [],
    errors: {},
    touched: {},
    required: false
}

export default Select;
