 const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];

 const Planets = () =>{
   return(
     <div>
       <ul className='list-group w-50 mx-auto my-4'>
        {
          planets.map((planet, i)=>{
            return (
            <li key={i} className='list-group-item'>{planet}</li>
           )
          })
        }
        </ul>
     </div>
   )
 }

 export default Planets;
