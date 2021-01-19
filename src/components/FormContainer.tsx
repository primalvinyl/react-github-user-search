import * as React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { getUserList } from '../store/actions';
import * as yup from 'yup';
import Input from './Input';
import Button from './Button';
import Select from './Select';

const FormContainer = (): JSX.Element => {
    const searchFilterList = [
        {value: 'login', displayValue: 'Account Name'},
        {value: 'followers', displayValue: ' Number of Followers'},
        {value: 'repos', displayValue: 'Number of Repos'}
    ];

    const dispatch = useDispatch();
    const getUserListHandler = searchParams => {
        let sendData = null;
        const { searchFilter, searchText } = searchParams;
        if (searchFilter === 'login') {
            sendData = searchText;
        } else {
            sendData = `${searchFilter}:%3E${searchText}`;
        }
        dispatch(getUserList(sendData));
    };

    return (
        <section className="search-form">
            <Formik
                initialValues={{
                    searchText: '',
                    searchFilter: 'login'
                }}
                enableReinitialize
                validationSchema={yup.object().shape({
                    searchText: yup
                        .string()
                        .required('A search parameter is required')
                })}
                onSubmit={(values, { setSubmitting }): void => {
                    getUserListHandler(values);
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

export default FormContainer;
