const Alert2 = ({show, text}) => {
    if(show==='false'){
      return null;
    } else {
      return(
        <div class="alert alert-danger" role="alert">
            {text}
        </div>
      )
    }
}

export default Alert2;
