
export default function MsgBox({name , textcolor, description, desColor }) {
    return (
      <>
        <h1 style={{color: textcolor}}>Hello, {name}</h1>
        <p style={{color: desColor}}> {description}</p>
      </>
    );
}



