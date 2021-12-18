import axios from 'axios';
import {
    addCompanyFail,
    addCompanyStart,
    addCompanySuccess,
    deleteCompanyFail,
    deleteCompanyStart,
    deleteCompanySuccess,
    getCompanyFail,
    getCompanyStart,
    getCompanySuccess,
    getOneCompanyStart,
    getOneCompanySuccess,
    getOneCompanyFail,
} from './companyRedux';

export const getAllCompany = async (dispatch) => {
    dispatch(getCompanyStart());
    try {
        const res = await axios.get('/company');
        dispatch(getCompanySuccess(res.data));
    } catch (err) {
        dispatch(getCompanyFail());
    }
};

export const getOneCompany = async (company, dispatch) => {
    dispatch(getOneCompanyStart());
    try {
        const res = await axios.get('/company/find/' + company);
        dispatch(getOneCompanySuccess(res.data));
    } catch (err) {
        dispatch(getOneCompanyFail());
    }
};

export const addNewCompany = async (toast, company, dispatch) => {
    dispatch(addCompanyStart());
    try {
        const res = await axios.post('/company', company);
        dispatch(addCompanySuccess(res.data));
        toast({
            title: `Success created ${company.name}`,
            status: 'success',
            isClosable: true,
        });
    } catch (err) {
        dispatch(addCompanyFail());
        toast({
            title: `Error: ${err}`,
            status: 'error',
            isClosable: true,
        });
    }
};

export const deleteCompany = async (id, dispatch) => {
    dispatch(deleteCompanyStart());
    try {
        await axios.delete(`/company/${id}`);
        dispatch(deleteCompanySuccess(id));
    } catch (err) {
        dispatch(deleteCompanyFail());
    }
};
