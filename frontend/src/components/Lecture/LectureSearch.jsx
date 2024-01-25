import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import ToggleButton from '@mui/material/ToggleButton'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'
import SouthIcon from '@mui/icons-material/South'
import NorthIcon from '@mui/icons-material/North';
import Box from '@mui/material/Box'
import { useState } from 'react'

// 강의 검색창 (+ 태그 선택까지)

export default function LimitTags() {

	// 태그 검색 -> 불러와야함
	const Tags = ['프론트엔드', '백엔드', '게임개발','데이터', '다른', 'adfadfafd', '태그들','데이터', '다른', '추가', '태그들','데이터', '다른', '추가', '태그들','데이터', '다른', '추가', '태그들','데이터', '다른', '추가', '태그들','데이터', '다른', '추가', '태그들', '데이터', '다른', '추가', '태그들', '다른', '추가', '태그들', '다른', '추가', '태그들']

	// 호버 버튼용변수들
	const [selectedButtons, setSelectedButtons] = useState([])
	const handleButtonClick = (value) => {
		if (selectedButtons.includes(value)) {
			setSelectedButtons(selectedButtons.filter((btn) => btn !== value));
		} else {
			setSelectedButtons([...selectedButtons, value]);
		}
	}
	// 추가 태그 보기 위한 변수들
	const [add, setAdd] = useState(false)
	const toggleAdd = function () {
		setAdd(!add)
	}

	// (해시태그 이외의) 버튼들
	const levels = ['입문', '초급', '중급이상', '모든 수준']
	const sites = ['인프런', '유데미', '구름 에듀']


	//정렬관련
	const [sort, setSort] = useState('')
	const handleSort = (event) => {
		setSort(event.target.value)
	}

	return (
		<div>
			{
				// 추가로 안봤을 때
				add == false ? (
					<Grid container>
						{/* 태그로 검색 */}
						<Grid item style={{ width: '40%', display: 'flex', alignItems: 'center' }}>
							<Autocomplete
								multiple
								id="multiple-limit-tags"
								options={Tags}
								freeSolo
								getOptionLabel={(option) => '#' + option}
								renderInput={(params) => (
									<TextField {...params} label="태그로 검색해보세요" placeholder="" />
								)}
								sx={{ flex: '70%' }}
								size="small"
							/>
							<IconButton style={{ margin: 5 }}><SearchIcon fontSize='small' /></IconButton>
						</Grid>
						<Grid item style={{ marginLeft: '40px' }}>
							{
								Tags.slice(0,3).map((item, idx) => {
									return (
										<ToggleButton
											key={idx}
											value="item"
											selected={selectedButtons.includes(item)}
											onChange={() => handleButtonClick(item)}
											color='primary'
											size='large'
											sx={{ margin: '4px', height: '35px' }}
										>
											#{item}
										</ToggleButton>
									)
								})
							}
							<IconButton style={{ margin: 5 }} onClick={toggleAdd}>{
								add == false ? (<SouthIcon fontSize='small' />) : (<NorthIcon fontSize='small' />)
							}</IconButton>
						</Grid>

					</Grid>
				) : (
					<Grid container>
						{/* 태그로 검색 */}
						<Grid item style={{ width: '40%', display: 'flex', alignItems: 'center' }}>
							<Autocomplete
								multiple
								id="multiple-limit-tags"
								options={Tags}
								freeSolo
								getOptionLabel={(option) => '#' + option}
								renderInput={(params) => (
									<TextField {...params} label="태그로 검색해보세요" placeholder="" />
								)}
								sx={{ flex: '70%' }}
								size="small"
							/>
							<IconButton style={{ margin: 5 }}><SearchIcon fontSize='small' /></IconButton>
						</Grid>
						<Grid item style={{ marginLeft: '40px' }}>
							{
								Tags.slice(0,3).map((item, idx) => {
									return (
										<ToggleButton
											key={idx}
											value="item"
											selected={selectedButtons.includes(item)}
											onChange={() => handleButtonClick(item)}
											color='primary'
											size='large'
											sx={{ margin: '4px', height: '35px' }}
										>
											#{item}
										</ToggleButton>
									)
								})
							}
							<IconButton style={{ margin: 5 }} onClick={toggleAdd}>{
								add == false ? (<SouthIcon fontSize='small' />) : (<NorthIcon fontSize='small' />)
							}</IconButton>
						</Grid>
						<Box style={{height:'40px', overflow:'hidden', flexWrap:'nowrap', display:'flex'}}>
							<Grid item >
								{
									Tags.slice(3).map((item, idx) => {
										return (
											<ToggleButton
												key={idx}
												value="item"
												selected={selectedButtons.includes(item)}
												onChange={() => handleButtonClick(item)}
												color='primary'
												size='large'
												sx={{ margin: '4px', height: '35px'}}
											>
												#{item}
											</ToggleButton>
										)
									})
								}
							</Grid>
						</Box>
						

					</Grid>
				)
			}


			{/* 해시태그 제외 나머지 버튼들 */}
			<Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<Grid item xs={9}>
					<Grid container>
						<Grid item>
							{/* 난이도 */}
							{
								levels.map((item, idx) => {
									return (
										<ToggleButton
											key={idx}
											value="item"
											selected={selectedButtons.includes(item)}
											onChange={() => handleButtonClick(item)}
											color='primary'
											size='large'
											sx={{ margin: '4px', height: '35px' }}
										>
											{item}
										</ToggleButton>
									)
								})
							}
						</Grid>
						<Divider orientation="vertical" variant="middle" flexItem />
						<Grid item style={{ marginLeft: '40px' }}>
							{/* 사이트 */}
							{
								sites.map((item, idx) => {
									return (
										<ToggleButton
											key={idx}
											value={item}
											selected={selectedButtons.includes(item)}
											onChange={() => handleButtonClick(item)}
											color='primary'
											size='large'
											sx={{ margin: '4px', height: '35px' }}
										>
											{item}
										</ToggleButton>
									)
								})
							}
						</Grid>
					</Grid>
				</Grid>
				{/* 정렬 */}
				<Grid item sx={{ marginRight: '20px' }}>
					<FormControl sx={{ minWidth: '170px' }} fullWidth size='small'>
						<Select
							defaultValue={'최신순'}
							onChange={handleSort}
							inputProps={{ 'aria-label': 'Without label' }}
							sx={{color:'grey'}}
						>
							<MenuItem value='최신순'>최신순</MenuItem>
							<MenuItem value='가격순'>가격순</MenuItem>
							<MenuItem value='할인률높은순'>할인률높은순</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>

		</div>


	);
}
