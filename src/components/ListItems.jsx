import Item from "./Item";

export default function ListItems({ data, updateList }) {
  return (
    <div className="my-4">
      {data.map((item) => (
        <div key={item.id}>
          <Item toDo={item} updateList={updateList} />
        </div>
      ))}
    </div>
  );
}
