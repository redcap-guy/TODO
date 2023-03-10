import { useState } from 'react';
const fs= require("fs");
import img from './assets/bg-removebg-preview.png';
import data from './data.json';
import cat from './category.json';

function App() {
    const [count, setCount] = useState(6);
    const [done, setDone] = useState(0);
    const [form, setForm] = useState({
        Image: '',
        title: '',
        date: '',
        start: '',
        end: '',
        desc: '',
    });
    function change(event) {
        const { name, value } = event.target;
        setForm((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    function submit(event) {
        event.preventDefault();

        const formData = {
            Image: form.Image,
            title: form.title,
            date: form.date,
            start: form.start,
            end: form.end,
            desc: form.desc,
        };
        fs.writeFile("data.json",JSON.stringify(formData) +"\n",{flag:'a'},(err)=>{if(err){console.error(err)}})
    }
    return (
        <>
            <div className='screen screen1'>
                <img src={img} />
                <h1> Welcome to TODOs</h1>
                <p>a training app to go to aghwat with</p>
                <button>Let's start</button>
            </div>
            <div className='screen screen2'>
                <nav className='nav-bar'>
                    <i class='fa fa-bars' aria-hidden='true'></i>
                    <span>homepage</span>
                    <i class='fa fa-bell-o' aria-hidden='true'></i>
                </nav>
                <div className='task-view'>
                    <div id='progress-sty'>
                        <h1>today's progress summery</h1>
                        <p>{count} tasks</p>
                        <div className='progressview'>
                            <div className='progresstext'>
                                <p>progress</p>
                                <p>{(done / count) * 100}%</p>
                            </div>
                            <div className='progress-bar'></div>
                        </div>
                    </div>

                    <div className='progresstext'>
                        <h1>Today's tasks</h1>
                        <p>see all</p>
                    </div>
                    <div className='card'>
                        <img src={img} />
                        <div className='flex-col'>
                            <h1>Title</h1>
                            <p>date</p>
                        </div>
                        <i class='fa fa-arrow-right' aria-hidden='true'></i>
                    </div>
                    {data.map((task) => (
                        <div className='card'>
                            <img src={task.Image} />
                            <div className='flex-col'>
                                <h1>{task.title}</h1>
                                <p>{task.date}</p>
                            </div>
                            <i class='fa fa-arrow-right' aria-hidden='true'></i>
                        </div>
                    ))}
                </div>
                <footer className='foot'>
                    <i className='fa fa-home' aria-hidden='true'></i>
                    <i className='fa fa-calendar' aria-hidden='true'></i>
                    <i
                        className='fa fa-plus diff'
                        style={{
                            backgroundColor: '#0093e9',
                            color: 'white',
                            borderRadius: '50px',
                            height: '60px',
                            width: '60px',
                            fontSize: '30px',
                        }}
                        aria-hidden='true'
                    ></i>
                    <i className='fa fa-inbox' aria-hidden='true'></i>
                    <i className='fa fa-user' aria-hidden='true'></i>
                </footer>
            </div>
            <div className='screen screen3'>
                <nav className='nav-bar'>
                    <i class='fa fa-arrow-left' aria-hidden='true'></i>
                    <span>Create TODO</span>
                </nav>
                <form>
                    <span>TODO Name:</span>
                    <input
                        className='input-style'
                        type='text'
                        name='title'
                        placeholder='khalil'
                        onChange={change}
                        value={form.title}
                    />
                    <span>Category:</span>
                    <br />
                    {cat.map((category) => (
                        <label className='custom'>
                            <input className='' type='radio' name='cat' value={category.name} onChange={change} />
                            <span>{category.name}</span>
                        </label>
                    ))}
                    <span>Date and Time:</span>
                    <input className='input-style date' type='date' name='date' value={form.date} onChange={change} />
                    <span>start Time:</span>

                    <input className='input-style date' type='time' name='start' value={form.start} onChange={change} />
                    <span>end Time:</span>

                    <input className='input-style date' type='time' name='end' value={form.end} onChange={change} />
                    <span>description:</span>
                    <input
                        className='input-style des'
                        type='text'
                        name='desc'
                        placeholder='description...'
                        value={form.desc}
                        onChange={change}
                    />
                    <button onClick={submit}>Create</button>
                </form>
            </div>
        </>
    );
}

export default App;
