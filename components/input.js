function Input(props) {
  {/* <div> */ }
  {/*   <label className="block text-sm font-medium mb-2 dark:text-white">{props.name}</label> */ }
  {/*   <div className="relative"> */ }
  {/*     <input type="text" id="hs-trailing-icon" name="hs-trailing-icon" className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder={props.placeholder}></input> */ }
  {/*     <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4"> */ }
  {/*       {props.children} */ }
  {/*     </div> */ }
  {/*   </div> */ }
  {/* </div> */ }
  return (
    <>
      <label className="block text-xl font-bold mb-1">{props.name}</label>
      <input type={props.type} onChange={props.onChange} className="mb-5 h-9 bg-gray-300" />
    </>

  );
}
export default Input

