import React from 'react';
import '../styles/Model.css';
import ModelNav from '../components/ModelNav';
import ModelViewer from '../components/model_viewer';
import NavBar from '../components/navbar.js';


function Model() {
	return (<div className='MainPage'>
		<div className='Model'>
			<NavBar />
			<ModelNav />
			<div className='viewModel'>
				<ModelViewer props={{}} />
			</div>
		</div>
	</div>);
}

export default Model;