const Alert = (props) => {
  return(
    <div class="alert alert-danger" role="alert">
        {props.text}
    </div>
  )
}

export default Alert;
