const Hello = (props) => {
	const {name, username} = props;
	return(
		<>
           <h1>Hello {name}</h1>
           <p>{username}</p>
        </>
    )
}

export default Hello
