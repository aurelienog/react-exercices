import { React, useState } from 'react'

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [text, setText] = useState('likes')
  const [bgColor , setColor] = useState('#000000')
  const handleCountUp = () => {

    setLikes((prev) => {
    const newLikes = prev + 1;
    
    setText(newLikes === 1 ? 'like' : 'likes');

    setColor(
      "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    );
    
  return (newLikes)
  });
};

  return (
    <div className='border rounded-lg w-20 cursor-pointer m-4 mx-auto text-white' style={{backgroundColor : bgColor}}>
      <button onClick={handleCountUp}>{likes} {text} </button>
    </div>
  )
}

LikeButton.defaultProps = 0;
