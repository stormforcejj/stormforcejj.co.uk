import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Discord, Nextdotjs, Nodedotjs, ReactJs, Apachemaven, Haskell, Javascript, Tailwindcss, Sqlite, Git, Visualstudiocode, Obsidian, Intellijidea, C, Latex, Gnubash, Mongodb, Mysql, Linux } from '@icons-pack/react-simple-icons';

export default function Index() {
    return (
    <div className="">
        <Head>
            <title>• James</title>
            <meta name="" content="" />
            <link rel="icon" href="/favicon.svg" />
        </Head>   
            <h1 className='text-[50px] font-extrabold'>CV 🚀</h1>
            <p>Ruthin, Wales | contact@stormforcejj.co.uk | +44 07572 746837</p>
            <h2 className='text-[27px] font-extrabold pt-5'>Technical Skills</h2>
            <p><i>Programming</i></p>
            <div className="mx-10 my-3">
                <div className="grid grid-cols-1 gap-4 text-lg sm:grid-cols-2 md:grid-cols-5">
                    <div>
                        <span><Nextdotjs className='inline-flex align-text-top' color='#fff' size={20}/><span className='pl-2'>NextJS</span></span>
                    </div>
                    <div>
                        <span><Nodedotjs className='inline-flex align-text-top' color='#339933' size={20}/><span className='pl-2'>NodeJS</span></span>
                    </div>
                    <div>
                        <span><ReactJs className='inline-flex align-text-top' color='#61DAFB' size={20}/><span className='pl-2'>React</span></span>
                    </div>
                    <div>
                        <span><Javascript className='inline-flex align-text-top' color='#F7DF1E' size={20}/><span className='pl-2'>JavaScript</span></span>
                    </div>
                    <div>
                        <span><Tailwindcss className='inline-flex align-text-top' color='#06B6D4' size={20}/><span className='pl-2'>Tailwind</span></span>
                    </div>
                    <div>
                        <span><Intellijidea className='inline-flex align-text-top' color='#C71A36' size={20}/><span className='pl-2'>Java</span></span>
                    </div>
                    <div>
                        <span><Haskell className='inline-flex align-text-top' color='#5D4F85' size={20}/><span className='pl-2'>Haskell</span></span>
                    </div>
                    <div>
                        <span><C className='inline-flex align-text-top' color='#A8B9CC' size={20}/><span className='pl-2'>C</span></span>
                    </div>
                    <div>
                        <span><Latex className='inline-flex align-text-top' color='#008080' size={20}/><span className='pl-2'>Latex</span></span>
                    </div>
                    <div>
                        <span><Gnubash className='inline-flex align-text-top' color='#4EAA25' size={20}/><span className='pl-2'>Shell Scripts</span></span>
                    </div>
                </div>
            </div>

             <p className='mt-2'><i>Databases</i></p>
             <div className="mx-10 my-3">
                <div className="grid grid-cols-1 gap-4 text-lg sm:grid-cols-2 md:grid-cols-5">
                    <div>
                        <span><Mysql className='inline-flex align-text-top' color='#4479A1' size={20}/><span className='pl-2'>SQL</span></span>
                    </div>
                    <div>
                        <span><Sqlite className='inline-flex align-text-top' color='#003B57' size={20}/><span className='pl-2'>SQLite</span></span>
                    </div>
                    <div>
                        <span><Mongodb className='inline-flex align-text-top' color='#47A248' size={20}/><span className='pl-2'>MongoDB</span></span>
                    </div>
                </div>
            </div>
            <p className='mt-2'><i>Miscellaneous</i></p>
             <div className="mx-10 my-3">
                <div className="grid grid-cols-1 gap-4 text-lg sm:grid-cols-2 md:grid-cols-5">
                    <div>
                        <span><Git className='inline-flex align-text-top' color='#F05032' size={20}/><span className='pl-2'>Git</span></span>
                    </div>
                    <div>
                        <span><Linux className='inline-flex align-text-top' color='#fff' size={20}/><span className='pl-2'>Linux</span></span>
                    </div>
                </div>
            </div>

            <h2 className='text-[27px] font-extrabold pt-5'>Education</h2>
            <p><b>Degree</b> <i>University of Warwick</i>, Coventry</p>
            <p>Expected Graduation: 2027</p>
            <br />
            <ul>
                <li><b>Modules</b>
                    <ul className='px-6 list-disc'>
                        <li>CS118 (Programming for Computer Scientists)</li>
                        <li>CS126 (Design of Information Structures)</li>
                        <li>CS130 (Mathematics for Computer Scientists I)</li>
                        <li>CS131 (Mathematics for Computer Scientists II)</li>
                        <li>CS132 (Computer Organisation & Architecture)</li>
                        <li>CS133 (Professional Skills) </li>
                        <li>CS140 (Computer Security)</li>
                        <li>CS141 (Functional Programming)</li>
                    </ul>
                </li>
            </ul>

            <hr className='border-neutral-900 my-7' />

            <p><b>A Levels</b> <i>Ysgol Brynhyfryd</i>, Ruthin</p>
            <p>2017-2024</p>
            <br></br>
            <p><b>Grades</b></p>
            <ul className='px-6 list-disc'>
                <li>Computer Science - A*</li>
                <li>Mathematics - A*</li>
                <li>Chemistry - A</li>
                <li>Further Mathematics - C</li>
            </ul>

            <h2 className='text-[27px] font-extrabold pt-5'>Projects</h2>
            <p><b>A Level Project</b> <i>EduSchedule</i>, (Java & SQLite)</p>
            <ul className='px-6 list-disc'><li>Software to manage and handle the creation of school timetables, capable of delivering personalized timetables for each
student and creating options forms for GCSE and A Level. Gained additional skills in Java, Git and SQLite.</li></ul>

<hr className='border-neutral-900 my-7' />

            <p><b>Personal Website (This Site)</b> <i><a href='/home' target="_blank" rel="noopener noreferrer" className='text-blue-500'>stormforcejj.co.uk</a></i>, (Java & SQLite)</p>
            <ul className='px-6 list-disc'><li>A personal portfolio website built using NextJS. Experiences gained include CI/CD and Linux server hosting.</li></ul>

            <h2 className='text-[27px] font-extrabold pt-5'>Interests</h2>
            <ul className='px-6 list-disc'>
                <li>Volunteer at Llangollen Heriatage Railway</li>
                <li>Member of University of Warwick String Group and University of Warwick Symphony Orchestra</li>
                <li>Keen Climber</li>
            </ul>

            <h2 className='text-[27px] font-extrabold pt-5'>References</h2>
            <p>Available on Request</p>

            <div className="my-7 text-neutral-600">
                <hr className='border-neutral-900' />
                <div className="">
                    <h2 className='text-[35px] font-extrabold pt-5'>James</h2>
                    <p className='text-[20px]'>stormforcejj.co.uk • 2025</p>
                </div>
            </div>
    </div>
    )
}
