import './User.css';

function User(props) {
    return (
        <div className='col-md-4 col-sm-12' style={{marginTop: "20px"}}>
            <a href={'/user/'+props.id} style={{textDecoration:"none", color:'black'}}>
                <div className='userDiv'>
                    <img src={props.avatar} alt="" className='userImage'></img>
                    <div className='name'>{props.firstName}</div>
                    <div style={{overflow:"hidden", fontSize:"12px"}}>{props.email}</div>
                </div>
            </a>
        </div>
    );
}

export default User;
