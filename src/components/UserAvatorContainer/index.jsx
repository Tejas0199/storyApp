import './style.css';


const UserAvatorContainer = ({ users = [{id : 1},{ id : 2}],setStatus}) => {
	return <div className='container'>
		<div className="user-icon-container">
		{
			users.map( (user,index) => {
				return <UserIcon key={index} setStatus={setStatus} user={user}/>
			})
		}
	</div>
	</div>
}

const UserIcon = ({user,setStatus}) => {
	return <div className="avator" onClick={() => setStatus(user.status)} >
		<img src={`https://robohash.org/${user.id}?set=set3&size=180x180`}/>
	</div>
}


export default UserAvatorContainer;