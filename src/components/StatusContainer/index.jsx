import { useEffect, useRef, useState } from "react";
import './style.css';


const StatusContainer = ({status}) => {
	const [post,setPost] = useState(0);
	const [userStatus,setUserStatus] = useState([]);
	const interval = useRef(null);
	useEffect(() => {
		let intervalId = null;
		setUserStatus(status);
		if(status.length && interval.current === null) {
			intervalId = setInterval(() => {
				setPost(prev => {
					return prev + 1
				});
				
				console.log("tejas")
			},10 * 1000)
			interval.current = intervalId;
		}
		
		return () => intervalId !== null && clearInterval(intervalId);
	},[status])
	useEffect(() => {
		if(post === status.length) {
			clearInterval(interval.current);
			interval.current = null;
			setPost(0);
			setUserStatus([]);
		}
	},[post]) 
	return <div className="status-container">
		{
			userStatus.length > 0 ? <div className="img-container">
				<div className="progress"></div>
				<img  className="story" src={userStatus[post]?.postUrl} alt="" />
			</div> : <div><h5 className="no-story">No more Story :(</h5></div>
		}

	</div>	
}

export default StatusContainer;