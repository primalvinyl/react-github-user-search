import * as React from 'react';

const Button = ({
    id,
    value,
    type,
    isSubmitting,
    handleClick
}: ButtonType): JSX.Element => (
    <div className="form-group">
        <button
            className="form-control"
            id={id}
            type={type}
            onClick={handleClick}
            disabled={isSubmitting}
        >
            {value}
        </button>
    </div>
);

type ButtonType = {
    readonly id: string;
    readonly value: string;
    readonly type: 'submit' | 'button' | 'reset';
    readonly isSubmitting: boolean;
    readonly handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

Button.defaultProps = {
    id: '',
    value: '',
    type: 'submit',
    isSubmitting: false,
    handleClick: (): void => {},
}

export default Button;