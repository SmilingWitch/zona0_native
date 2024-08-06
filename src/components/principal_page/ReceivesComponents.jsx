import PendingList from "./PendingList"
import PerformedList from "./PerformedList"
import Receives from "./Receives"

const ReceivesComponents = ({navigation}) => {

    const receiptsRoutesComponent1 = {
        performed: () => <PerformedList navigation = {navigation}/> ,
        pending: () => <PendingList navigation = {navigation} />
      }

    return <Receives routesComponent = {receiptsRoutesComponent1} navigation = {navigation}/>
 }

export default ReceivesComponents
