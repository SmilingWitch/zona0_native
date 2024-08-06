import { setDonatedList, setpendingList, setPerformedList, setTransferedList, setZonaPoint } from "../../store/reducer";
import { operations } from "../general/operations";


export const refreshData = async (setLoading, accessToken, dispatch) => {
    try {
      setLoading(true)
      await Promise.all([
          operations(accessToken, dispatch, "/transfer/list-unpaid-receive/", setpendingList),
          operations(accessToken, dispatch, "/transfer/list-paid-receive/", setPerformedList),
          operations(accessToken, dispatch, "/institutions/donations/", setDonatedList),
          operations(accessToken, dispatch, "/transfer/list-sendTransfer/", setTransferedList),
          operations(accessToken, dispatch, "/accounts/osp_points/", setZonaPoint, "total_balance")
      ]);
          setLoading(false)
      }catch (error) {
      console.error(error)
      setLoading(false)
    }
  };
