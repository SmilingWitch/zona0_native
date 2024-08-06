import { operations } from "../general/operations";


export const institutionsList = async ( accessToken,
                                        dispatch,
                                        setInstitutionsList,
                                        item,
                                        setDonatedAmount) => {
    try {
       const result =  await operations(accessToken, dispatch, "/institutions/list-institution/", setInstitutionsList);
       const foundItem = result.find(i=> i.id === item.id);
       setDonatedAmount(foundItem.institution_osp)
    } catch (error) {
        console.error(error);
    }
};
