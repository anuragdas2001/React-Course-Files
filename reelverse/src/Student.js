let Student = (props) =>{
    const {name,info} = props;
    // console.log(props.info.marks)
    // console.log(props.info.motto)
    // console.log(props)
    
    return(
    <div>
      <h2>Name: {name}</h2>
      <p>Since: {info.marks}</p>
      <p>Motto: {info.motto}</p>
    </div>
  );}
 
  
  export default Student;