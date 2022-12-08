import {Button} from 'antd'

interface ExtraProps {
  name: string;
}
const renderRows = (rows: number) => {
  const rowsArray = [];
  for (let i = 0; i < rows; i++) {
    rowsArray.push(<div className="row" key={i}>{i}</div>);
  }
  return rowsArray;
}

const onClick = () => {
  alert('clicked');
}


function Extra(props: ExtraProps) {
  return (
    <div className="Extra">
      <h1>Extra</h1>
      <p>Extra content</p>
      <Button type="primary" onClick={onClick}>{props.name}</Button>
      {renderRows(10)}
      </div>
  )
}

export default Extra;