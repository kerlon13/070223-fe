import YouTube from 'react-youtube';
import style from './index.module.css'
function Video () {
    
  const videoId = 'J_csajqY01k';

  const opts = {
    height: '920',
    width: "100%",
    playerVars: {
      autoplay: 0, 
    },
  };

  return (
    <section className={style.video}>
        <div className={style.video_wrapper}>
            <YouTube videoId={videoId} opts={opts} />
        </div> 
    </section>
    
  )
}

export default Video;