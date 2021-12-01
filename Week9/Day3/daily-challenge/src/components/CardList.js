import Card from './Card.js';

const CardList = (props)=>{
	const {arr_robots} = props;
  return(
    <div>
        {
        	arr_robots.map((item, i)=>{
        		return <Card robots={item} key={i}/>
        	})
        }
    </div>
  )
}

export default CardList;
