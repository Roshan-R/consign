function Input(props) {
  return (
    <>
      <label className="block text-xl text-gray-700 font-roboto font-bold mb-1">{props.name}</label>
      <input className="mb-5 h-9 w-full border-gray-300 bg-gray-300" type="text" />
    </>

  );
}
export default Input
