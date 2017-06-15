import React from 'react'
import {render} from 'react-dom'
//import {SkiDayList} from './components/SkiDayList'
//import {SkiDayCount} from './components/SkiDayCount'
import { App } from './components/App'
window.React = React

/*render(
	<SkiDayCount backcountry={false}/>,
	document.getElementById('react-container')
)*/

render(
	<App />,
	//si pasas el array sin datos debe salir un error, si mandas un string debe salir otro error

	document.getElementById('react-container')
)