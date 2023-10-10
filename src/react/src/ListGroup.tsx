interface Props {
  items: string[];
  onDeleteItem: (index: number, item: string) => void;
}

function ListGroup({ items, onDeleteItem }: Props) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li className="list-group-item" key={item}>
          <span>{item}</span>
          <span
            onClick={() => {
              onDeleteItem(index, item);
            }}
          >
            {" "}
            [x]
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
