import { fetchData } from "../general/fetchData"
import { institutionsList } from "./institutionsList"
import { showToast } from "./showToast"

export const donations = async (value,
                                setLoading,
                                item,
                                user,
                                accessToken,
                                setVisible,
                                dispatch,
                                setInstitutionsList,
                                setDonatedAmount) => {
    setLoading(true)

    fetchData("/institutions/donations/",
        {amount:value.amount,
        user: user.pk,
        institution: item.id}, accessToken )

    .then(data => {
        setLoading(false)
        if (data.error) {
            console.log(data.error)
            showToast('error', 'Failed', data.error.amount);
            setVisible(false)
          } else {
            showToast('success', 'Success', "Donation successfully sent");
            setVisible(false)
            institutionsList(accessToken,
                             dispatch,
                             setInstitutionsList,
                             item,
                             setDonatedAmount )
          }
        })
    .catch(error => {
        showToast('error', 'Failed', "An error has occurred");
        setLoading(false)})
}
