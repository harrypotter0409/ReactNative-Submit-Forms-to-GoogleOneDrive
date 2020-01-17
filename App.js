import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import TimeCheck from './components/timeCheck'
import EmployeeInformation from './components/EmployeeInformation'

const RootStack = createStackNavigator(
	{
		TimeCheck: TimeCheck,
		EmployeeInformation: EmployeeInformation
	},
	{
		initialRouteName: 'EmployeeInformation'
	}
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
	render() {
		return <AppContainer />
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
