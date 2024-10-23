const ItemListContainer = (props) => {
  const { greeting } = props;
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <p className="text-xl font-medium">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
