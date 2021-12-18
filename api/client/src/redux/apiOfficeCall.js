import axios from 'axios'
import { addOfficeFail, addOfficeStart, addOfficeSuccess, deleteOfficeFail, deleteOfficeSuccess, getOfficeFail, getOfficeStart, getOfficeSuccess } from "./officeRedux"

export const getOfficeByCompany = async (company, dispatch) => {
    dispatch(getOfficeStart());
    try {
        const res = await axios.get('/office?' + company)
        dispatch(getOfficeSuccess(res.data))
    } catch (err) {
        dispatch(getOfficeFail())
    }
}

// ADD NEW OFFICE
export const addNewOffice = async (toast, office, dispatch) => {
    dispatch(addOfficeStart());
    try {
        const res = await axios.post('/office', office)
        dispatch(addOfficeSuccess(res.data))
        toast({
            position: 'top',
            title: `Success created ${office.name} office of ${office.company}`,
            status: 'success',
            isClosable: true,
        });
    } catch (err) {
        dispatch(addOfficeFail())
        toast({
            position: 'top',
            title: `Please input all field`,
            status: 'error',
            isClosable: true,
        });
    }
}

// DELETE OFFICE
export const deleteOffice = async (toast, id, dispatch) => {
    try {
        await axios.delete(`/office/${id}`)
        dispatch(deleteOfficeSuccess(id))
        toast({
            position: 'top',
            title: `Office has been deleted`,
            status: 'info',
            isClosable: true,
        });
    } catch (err) {
        dispatch(deleteOfficeFail())
    }
}

// DELETE ALL OFFICE BY COMPANY
export const deleteAllOffice = async (toast, company) => {
    try {
        await axios.delete(`/office/find/${company}`)
    } catch (err) {
        toast({
            position: 'top',
            title: `Error: ${err}`,
            status: 'error',
            isClosable: true,
        });
    }
}