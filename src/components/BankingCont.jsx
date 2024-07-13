import { ScrollView, StyleSheet, View } from "react-native"
import BankingDeposits from "./BankingDeposits"
import BankingOpperation from "./BankingOpperation"
import theme from "../theme"


const BankingCont = () => {
    return(
        <ScrollView style = {styles.container} >
           <BankingOpperation/>
            <BankingDeposits/>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 25
    }
})

export default BankingCont