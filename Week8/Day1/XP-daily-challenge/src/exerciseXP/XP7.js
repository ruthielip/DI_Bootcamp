const animals = ['Horse','Turtle','Elephant','Monkey'];
const animalsTwo = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];

const XP7 = () => {
  return(
     <div>
     <ul>
       {animals.map(animal=>{
          return <li>{animal}</li>
       })}
       </ul>
       <ul>
         {animalsTwo.map(key=>{
           return <li>{key.label}</li>
         })}
       </ul>
     </div>
  )
}

export default XP7;
