const Alert3 = ({text, color}) => {
   if(color==='orange'){
     return(
       text=
       <div className="alert alert-warning" role="alert">
         {text}
       </div>
     )
   }
   else {
     return(
       <div className="alert alert-danger" role="alert">
         {text}
       </div>
     )
   }
}

export default Alert3;
