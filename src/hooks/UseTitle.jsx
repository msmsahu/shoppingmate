import { useEffect } from "react"

const UseTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} | Shopping Cart`
    }, [title]);
  return (
    <></>
  );
}
export default UseTitle;
