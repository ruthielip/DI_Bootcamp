const Card = (props) =>{
	const {robots} = props;
	const {name, email, username, id} = robots;
    return(
        <div className='tc grow bg-light-green br3 pa3 ma2 shadow-5 dib'>
          <img src={`https://robohash.org/${id}?size=200x200`} alt='robot' />
          <h2>{name}</h2>
          <p>{email}</p>
          <h4>{username}</h4>
        </div>
    )
}

export default Card;
