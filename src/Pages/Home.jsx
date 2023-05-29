import { Box, TextField, MenuItem, Select, InputLabel } from '@mui/material';
import Header from '../Components/Header/Header';
import { Link } from 'react-router-dom';
import { Modal } from 'modal-noobie';
/* import Modal from '../Components/modal/Modal'; */

import { useEffect, useState } from 'react';

/* 
import Styles from './modal.module.css';
className={Styles.openBtn}
className={Styles.modal}
className={Styles.overlay}
className={Styles.content}
className={Styles.closeBtn} */

const states = [
	{
		name: 'Alabama',
		abbreviation: 'AL',
	},
	{
		name: 'Alaska',
		abbreviation: 'AK',
	},
	{
		name: 'American Samoa',
		abbreviation: 'AS',
	},
	{
		name: 'Arizona',
		abbreviation: 'AZ',
	},
	{
		name: 'Arkansas',
		abbreviation: 'AR',
	},
	{
		name: 'California',
		abbreviation: 'CA',
	},
	{
		name: 'Colorado',
		abbreviation: 'CO',
	},
	{
		name: 'Connecticut',
		abbreviation: 'CT',
	},
	{
		name: 'Delaware',
		abbreviation: 'DE',
	},
	{
		name: 'District Of Columbia',
		abbreviation: 'DC',
	},
	{
		name: 'Federated States Of Micronesia',
		abbreviation: 'FM',
	},
	{
		name: 'Florida',
		abbreviation: 'FL',
	},
	{
		name: 'Georgia',
		abbreviation: 'GA',
	},
	{
		name: 'Guam',
		abbreviation: 'GU',
	},
	{
		name: 'Hawaii',
		abbreviation: 'HI',
	},
	{
		name: 'Idaho',
		abbreviation: 'ID',
	},
	{
		name: 'Illinois',
		abbreviation: 'IL',
	},
	{
		name: 'Indiana',
		abbreviation: 'IN',
	},
	{
		name: 'Iowa',
		abbreviation: 'IA',
	},
	{
		name: 'Kansas',
		abbreviation: 'KS',
	},
	{
		name: 'Kentucky',
		abbreviation: 'KY',
	},
	{
		name: 'Louisiana',
		abbreviation: 'LA',
	},
	{
		name: 'Maine',
		abbreviation: 'ME',
	},
	{
		name: 'Marshall Islands',
		abbreviation: 'MH',
	},
	{
		name: 'Maryland',
		abbreviation: 'MD',
	},
	{
		name: 'Massachusetts',
		abbreviation: 'MA',
	},
	{
		name: 'Michigan',
		abbreviation: 'MI',
	},
	{
		name: 'Minnesota',
		abbreviation: 'MN',
	},
	{
		name: 'Mississippi',
		abbreviation: 'MS',
	},
	{
		name: 'Missouri',
		abbreviation: 'MO',
	},
	{
		name: 'Montana',
		abbreviation: 'MT',
	},
	{
		name: 'Nebraska',
		abbreviation: 'NE',
	},
	{
		name: 'Nevada',
		abbreviation: 'NV',
	},
	{
		name: 'New Hampshire',
		abbreviation: 'NH',
	},
	{
		name: 'New Jersey',
		abbreviation: 'NJ',
	},
	{
		name: 'New Mexico',
		abbreviation: 'NM',
	},
	{
		name: 'New York',
		abbreviation: 'NY',
	},
	{
		name: 'North Carolina',
		abbreviation: 'NC',
	},
	{
		name: 'North Dakota',
		abbreviation: 'ND',
	},
	{
		name: 'Northern Mariana Islands',
		abbreviation: 'MP',
	},
	{
		name: 'Ohio',
		abbreviation: 'OH',
	},
	{
		name: 'Oklahoma',
		abbreviation: 'OK',
	},
	{
		name: 'Oregon',
		abbreviation: 'OR',
	},
	{
		name: 'Palau',
		abbreviation: 'PW',
	},
	{
		name: 'Pennsylvania',
		abbreviation: 'PA',
	},
	{
		name: 'Puerto Rico',
		abbreviation: 'PR',
	},
	{
		name: 'Rhode Island',
		abbreviation: 'RI',
	},
	{
		name: 'South Carolina',
		abbreviation: 'SC',
	},
	{
		name: 'South Dakota',
		abbreviation: 'SD',
	},
	{
		name: 'Tennessee',
		abbreviation: 'TN',
	},
	{
		name: 'Texas',
		abbreviation: 'TX',
	},
	{
		name: 'Utah',
		abbreviation: 'UT',
	},
	{
		name: 'Vermont',
		abbreviation: 'VT',
	},
	{
		name: 'Virgin Islands',
		abbreviation: 'VI',
	},
	{
		name: 'Virginia',
		abbreviation: 'VA',
	},
	{
		name: 'Washington',
		abbreviation: 'WA',
	},
	{
		name: 'West Virginia',
		abbreviation: 'WV',
	},
	{
		name: 'Wisconsin',
		abbreviation: 'WI',
	},
	{
		name: 'Wyoming',
		abbreviation: 'WY',
	},
];

function Home() {
	const [inputs, setInputs] = useState({ firstName: '', lastName: '', street: '', city: '', zipCode: '', department: '' });
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [startDate, setStartDate] = useState('');
	const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('data') || '[]'));

	//input change from value
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	// submit inputs
	const handleSubmit = (event) => {
		event.preventDefault();
		let data = {
			inputs,
			dateOfBirth,
			startDate,
		};
		setDatas([...datas, data]);
		localStorage.setItem('data', JSON.stringify([...datas, data]));
		setInputs({ firstName: '', lastName: '', street: '', city: '', zipCode: '', department: '' });
		setDateOfBirth('');
		setStartDate('');
	};

	return (
		<>
			<Header linkContent={<Link to="/employe">View Current Employees</Link>} />
			<div className="form-header">
				<h2>Create your employee by entering the infos</h2>
			</div>

			<form
				className="home_form_container"
				onSubmit={handleSubmit}>
				<div className="box-inputs-top">
					<TextField
						label="First Name"
						color="success"
						className="label"
						type="text"
						name="firstName"
						value={inputs.firstName || ''}
						onChange={handleChange}
						required
					/>

					<TextField
						label="Last Name"
						color="success"
						className="label"
						type="text"
						name="lastName"
						value={inputs.lastName || ''}
						onChange={handleChange}
						required
					/>

					<input
						className="datepicker"
						type="date"
						onChange={(e) => setDateOfBirth(e.target.value)}
						required
					/>

					<input
						className="datepicker"
						type="date"
						onChange={(e) => setStartDate(e.target.value)}
						required
					/>
				</div>

				<div className="adress_container">
					<h3>Adress</h3>
					<TextField
						label="Street"
						color="success"
						type="text"
						className="label"
						name="street"
						value={inputs.street || ''}
						onChange={handleChange}
						required
					/>
					<TextField
						label="City"
						color="success"
						type="text"
						className="label"
						name="city"
						value={inputs.city || ''}
						onChange={handleChange}
						required
					/>

					<TextField
						select
						label="State"
						required
						color="success"
						name="state"
						value={inputs.state || ''}
						onChange={handleChange}
						defaultValue="Alabama"
						className="label">
						{states.map((option) => (
							<MenuItem
								key={option.name}
								value={option.name}>
								{option.name}
							</MenuItem>
						))}
					</TextField>

					<TextField
						label="Zip code"
						color="success"
						type="number"
						className="label"
						name="zipCode"
						value={inputs.zipCode || ''}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="box-inputs-bottom">
					<h3>Department</h3>
					<Select
						placeholder="Sales"
						color="success"
						required
						name="department"
						value={inputs.department || ''}
						onChange={handleChange}
						className="label">
						<MenuItem value={'Sales'}>Sales</MenuItem>
						<MenuItem value={'Marketing'}>Marketing</MenuItem>
						<MenuItem value={'Engineering'}>Engineering</MenuItem>
						<MenuItem value={'Human Resource'}>Human Resources</MenuItem>
						<MenuItem value={'Legal'}>Legal</MenuItem>
					</Select>

					<Modal
						open="Send"
						close="x"
					/>
				</div>
			</form>
		</>
	);
}

export default Home;
