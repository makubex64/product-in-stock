const CategoryRow = ({ category }) => {
  return (
    <tr className="table table-active">
      <th colSpan="2" scope="row">
        {category}
      </th>
    </tr>
  );
};

export default CategoryRow;
