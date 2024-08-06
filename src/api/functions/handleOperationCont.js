import { showToast } from "./showToast";

export const handleOperationCont = (operation, data, navigation) => {
    switch (operation) {
        case 'receive':
          navigation.navigate("ReceiveDetails", {
            amount: data.amount,
            code: data.code,
            date: data.date,
            image: data.image,
            id: data.id,
            user: data.user,
            operation: 'pending'
          });
          break;
        case 'verify_token':
          navigation.navigate("Login");
          break;
        case "redeem":
            showToast('success', 'Congratulation!!', data.message)
            break;
        case "banking":
            showToast('success', 'Successful!!', "The operation has been performed successfully")
          break;
        default:
        break;
    }
  };
