import { StyleSheet } from "react-native";
import { Text, View } from '../components/Themed';

const TodoInfo: React.FC = () => {
    return (
			<View style={styles.container}>
				<Text style={styles.title}>Title</Text>
				<Text style={styles.description}>description</Text>
			</View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  description: {
		fontSize: 20
	}
});

export default TodoInfo;
