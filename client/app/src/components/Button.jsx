
const Button = ({title, id, toggle = true, click})=>{
    return(
        <a 
        href={`#${id}`} 
        className={`relative flex justify-center items-center w-[15rem] h-full ${toggle === true?"black": "bg-mainColor"}  border-[.2rem] border-mainColor border-solid rounded-[.8rem] text-[1.8rem] font-semibold tracking-[.1rem] ${toggle === true?" text-mainColor": "text-bgColor"}  z-10 overflow-hidden duration-[.5s] before:content-[""] before:absolute before:top-0 before:left-0 before:w-0 before:h-full ${toggle === true?"before:bg-mainColor": "before:bg-bgColor"}  before:-z-10 before:duration-[.5s] hover:before:w-full ${toggle === true?"hover:text-black": "hover:text-mainColor"} `} 
        onClick={click}
        >{title}</a>
    );
}

export default Button;