const Alert4 = ({text, color}) => {
   const colorClasses = {
     red: 'alert-danger',
     orange: 'alert-warning',
     green: 'alert-success'
   }
   if(!colorClasses[color]){
     return(
       <div>
       {alert(`The color ${color} is not in the list`)}
       </div>
     )
   } else {
     return(
       <div className={`alert ${colorClasses[color]} role='alert'`}>
          {text}
       </div>
     )
   }
}

export default Alert4;
