import Card from './Card.js';

const CardList = (props)=>{
	const {arr_robots} = props;
  return(
    <div>
        {
        	arr_robots.map(item=>{
        		return <Card robots={item} />
        	})
        }
    </div>
  )
}

export default CardList;