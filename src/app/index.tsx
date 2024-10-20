import {StatusBar} from 'expo-status-bar';
import {StyleSheet,  View, FlatList} from 'react-native';
import DayListItem from "@/components/core/DayListItem";



const days = [...Array(24)].map((val, index) => index + 1)
// [...Array(24)] :Создает новый массив с длиной 24, но без значений (пустой).
// .map((val, index) => index+1) Мы берём индекс каждого элемента и прибавляем к нему 1 (чтобы получить числа от 1 до 24).

export default function HomeScreen() {


    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                numColumns={2}
                contentContainerStyle={styles.content}
                columnWrapperStyle={styles.column}
                renderItem={({item}) => (
                    <DayListItem day={item}/>
                )}
            />


            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        //
        // gap: 10,

    },
    content: {
        // backgroundColor: 'red',
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,
    },

});
