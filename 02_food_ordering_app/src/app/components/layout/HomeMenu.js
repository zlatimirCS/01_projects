import MenuItem from "../menu/MenuItem";

const HomeMenu = () => {
  return (
    <section>
      <div className="text-center">
        <h3 className="uppercase text-gray-600 font-semibold leading-3">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
      </div>
    </section>
  );
};
export default HomeMenu;
