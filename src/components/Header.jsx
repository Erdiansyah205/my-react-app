const Header = (props) => {

console.log(props)
  return (
    <div id="Header">
        <h1>{props.title}</h1>

    </div>
  )
}

export default Header;
