const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center">
      <img src="/pizza2.jpg" alt="pizza" />
      <h4 className="font-semibold my-3 text-xl">Pepperoni pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <button className="bg-primary rounded-full text-white px-8 py-2 mt-4">
        {" "}
        Add to cart $12
      </button>
    </div>
  );
};
export default MenuItem;
