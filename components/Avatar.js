

function Avatar({ url }) {
  return (
  <img src={url} alt="profile pic" className=" ml-2 rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-130"/>
  )
}

export default Avatar;
