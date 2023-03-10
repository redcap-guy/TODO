import img from '../assets/bg-removebg-preview.png';

function initScreen() {
    return (
        <div className='screen screen1'>
            <img src={img} />
            <h1> Welcome to TODOs</h1>
            <p>a training app to go to aghwat with</p>
            <button>Let's start</button>
        </div>
    );
}
export default initScreen;
