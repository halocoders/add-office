import axios from 'axios'
import { addOfficeFail, addOfficeStart, addOfficeSuccess, deleteOfficeFail, deleteOfficeStart, deleteOfficeSuccess, getOfficeFail, getOfficeStart, getOfficeSuccess } from "./officeRedux"

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
            title: `Success created ${office.name} office of ${office.company}`,
            status: 'success',
            isClosable: true,
        });
    } catch (err) {
        dispatch(addOfficeFail())
        toast({
            title: `Please input all field`,
            status: 'error',
            isClosable: true,
        });
    }
}

export const deleteOffice = async (id, dispatch) => {
    dispatch(deleteOfficeStart());
    try {
        await axios.delete(`/office/${id}`)
        dispatch(deleteOfficeSuccess(id))
    } catch (err) {
        dispatch(deleteOfficeFail())
    }
}