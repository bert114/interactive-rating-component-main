const list = [1, 2, 3, 4, 5];

const listItem = list.map((list) => {
  return (
    <li key={list} id={list}>
      <button type="button">{list}</button>
    </li>
  );
});

export default listItem;
