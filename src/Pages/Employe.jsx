import { useState } from 'react';
import Header from '../Components/Header/Header';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { TableFooter, TableSortLabel } from '@mui/material';

export default function CustomPaginationActionsTable() {
	const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('data') || '[]'));
	const pages = [5, 10, 25, 50, 100];
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [order, setOrder] = useState();
	const [orderBy, setOrderBy] = useState();
	const headCells = [
		{
			id: 'firstName',
			label: 'First Name',
		},
		{
			id: 'lastName',
			label: 'Last Name',
		},
		{
			id: 'startDate',
			label: 'Start Date',
		},
		{
			id: 'department',
			label: 'Department',
		},
		{
			id: 'dateOfBirth',
			label: 'Date of Birth',
		},
		{
			id: 'street',
			label: 'Street',
		},
		{
			id: 'city',
			label: 'City',
		},
		{
			id: 'state',
			label: 'State',
		},
		{
			id: 'zip',
			label: 'Zip Code',
		},
	];

	//pagination handles

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const datasAfterPagingAndSorting = stableSort(datas, getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1.5) * rowsPerPage);

	//sorting

	function getComparator(order, orderBy) {
		return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
	}

	function stableSort(array, comparator) {
		const stabilizedThis = array.map((el, index) => [el, index]);
		stabilizedThis.sort((a, b) => {
			const order = comparator(a[0], b[0]);
			if (order !== 0) {
				return order;
			}
			return a[1] - b[1];
		});
		return stabilizedThis.map((el) => el[0]);
	}

	function descendingComparator(a, b, orderBy) {
		const aToCompare = a[orderBy] || a?.inputs[orderBy];
		const bToCompare = b[orderBy] || b?.inputs[orderBy];
		if (bToCompare < aToCompare) {
			return -1;
		}
		if (bToCompare > aToCompare) {
			return 1;
		}
		return 0;
	}

	const handleSort = (cellId) => {
		const isAsc = orderBy === cellId && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(cellId);
	};
	//searchBar
	const [filterText, setFilterText] = useState('');
	const onfilter = (e) => setFilterText(e.target.value);

	const filteredItems = datasAfterPagingAndSorting.filter(
		(item) =>
			item.inputs.lastName?.toLowerCase().includes(filterText.toLowerCase()) ||
			item.inputs.firstName?.toLowerCase().includes(filterText.toLocaleLowerCase()) ||
			item.dateOfBirth?.includes(filterText) ||
			item.startDate?.includes(filterText) ||
			item.inputs.street?.toLowerCase().includes(filterText.toLowerCase()) ||
			item.inputs.city?.toLowerCase().includes(filterText.toLowerCase()) ||
			item.inputs.state?.toLowerCase().includes(filterText.toLowerCase()) ||
			item.inputs.zipCode?.toLowerCase().includes(filterText.toLowerCase()) ||
			item.inputs.department?.toLowerCase().includes(filterText.toLowerCase())
	);

	return (
		<>
			<Header linkContent={<Link to="/">Home</Link>} />
			<div className="search_container">
				<input
					type=" text"
					placeholder="Search ..."
					className="table_search"
					onChange={onfilter}
				/>
			</div>
			<Paper>
				<TableContainer
					className="table"
					component={Paper}>
					<Table
						sx={{ minWidth: 650 }}
						aria-label="custom pagination table">
						<TableHead>
							<TableRow className="table_title">
								{headCells.map((item) => (
									<TableCell key={item.id}>
										<TableSortLabel
											active={orderBy === item.id}
											direction={orderBy === item.id ? order : 'asc'}
											onClick={() => {
												handleSort(item.id);
											}}>
											{item.label}
										</TableSortLabel>
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredItems.map((row, index) => (
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									key={index}>
									<TableCell align="left">{row.inputs.firstName}</TableCell>
									<TableCell align="left">{row.inputs.lastName}</TableCell>
									<TableCell align="left">{row.startDate}</TableCell>
									<TableCell align="left">{row.inputs.department}</TableCell>
									<TableCell align="left">{row.dateOfBirth}</TableCell>
									<TableCell align="left">{row.inputs.street}</TableCell>
									<TableCell align="left">{row.inputs.city}</TableCell>
									<TableCell align="left">{row.inputs.state}</TableCell>
									<TableCell align="left">{row.inputs.zipCode}</TableCell>
								</TableRow>
							))}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TablePagination
									rowsPerPageOptions={pages}
									count={datas.length}
									rowsPerPage={rowsPerPage}
									page={page}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
								/>
							</TableRow>
						</TableFooter>
					</Table>
				</TableContainer>
			</Paper>
		</>
	);
}
