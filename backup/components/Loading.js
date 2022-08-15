import {
    ChasingDots,
    Circle,
    CubeGrid,
    DoubleBounce,
    FadingCircle,
    FoldingCube,
    Pulse,
    RotatingPlane,
    ThreeBounce,
    WanderingCubes,
    Wave
} from 'better-react-spinkit'

function Loading() {
  return (
    <center style={{display:'grid', placeItems: 'center', height: '100vh'}}>
        <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" alt=""
                  height={200}
                  style={{ marginBottom: 10 }} />

              <FoldingCube color='#3CBC28' size={50} />
        </div>
          
    </center>
  )
}

export default Loading