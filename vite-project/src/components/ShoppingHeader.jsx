const ShoppingHeader = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="relative h-[87.5vh] bg-cover bg-center"
        style={{ backgroundImage: "url('Shopping1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65 flex flex-col items-center justify-center">
          <p className="text-xl font-bold md:text-2xl text-white mb-2">Things To Do</p>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-11">Shopping in Penang</h1>
          <p className="text-lg text-white">
            Discover the charm of shopping streets and find essentials when you need them most.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShoppingHeader