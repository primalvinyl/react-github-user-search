import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { SearchType } from '../../../__types__';
import Input from '../presentation/Input';
import Button from '../presentation/Button';
import Select from '../presentation/Select';

const FormContainer = (props: FormContainerType): JSX.Element => {
    const searchFilterList = [
        {value: 'followers', displayValue: 'Followers'},
        {value: 'repos', displayValue: 'Repositories'},
        {value: 'created', displayValue: 'Date Joined'}
    ];

    return (
        <section className="search-form">
            <Formik
                initialValues={{
                    searchText: '',
                    searchFilter: 'followers'
                }}
                enableReinitialize
                validationSchema={yup.object().shape({
                    searchText: yup
                        .string()
                        .required('A search parameter is required')
                })}
                onSubmit={(values, { setSubmitting }): void => {
                    props.getUserListDispatcher(values);
                    setSubmitting(false);
                }}
                render={({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }): JSX.Element => (
                    <form onSubmit={handleSubmit}>
                        <Select
                            id="searchFilter"
                            value={values.searchFilter}
                            values={searchFilterList}
                            errors={errors}
                            touched={touched}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                        <Input
                            type="text"
                            id="searchText"
                            value={values.searchText}
                            errors={errors}
                            touched={touched}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                        <Button
                            value="Search"
                            id="button-submit"
                            type="submit"
                            isSubmitting={isSubmitting}
                        />
                    </form>
                )}
            />
        </section>
    );
};

type FormContainerType = {
    readonly getUserDispatcher: (data: SearchType) => void;
    readonly getUserListDispatcher: (data: SearchType) => void;
};

FormContainer.defaultProps = {
    getUserDispatcher: (): void => {},
    getUserListDispatcher: (): void => {}
}

export default FormContainer;
