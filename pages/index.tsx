import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Discord, Nextdotjs, Nodedotjs, ReactJs, Apachemaven, Haskell, Javascript, Tailwindcss, Sqlite, Git, Visualstudiocode, Obsidian, Intellijidea } from '@icons-pack/react-simple-icons';

export default function Index() {
    return (
    <div className="">
        <Head>
            <title>• James</title>
            <meta name="" content="" />
            <link rel="icon" href="/favicon.svg" />
        </Head>   
        <section className='max-w-[80%] ml-auto mr-auto'>
            <div className="links"> 
                <ul className='flex font-extrabold'>
                    <li><Link href={'https://github.com/stormforcejj'} rel="noopener noreferrer" target="_blank"><Github className="justify-center mx-2" color='#fff'  size={30} /></Link></li>
                    <li className='py-1'>
                        <Link href={'https://goo.gl/maps/Vev1nLPSzN9ztcYG8'}rel="noopener noreferrer" target="_blank">
                            <span className='justify-center px-6 py-2 m-2 font-extrabold rounded-l-full rounded-r-full text-black bg-[#a2ff9a] hover:bg-[#b9ffb4]'>Wales</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <h1 className='text-[50px] font-extrabold pt-5'>Hi, I'm James 👋</h1>
            <p className='text-lg'>Hey, I'm James. I'm a Computer Science student from
                <a className='pl-1'href="https://www.google.com/maps/place/North+Wales/" target="_blank">
                    🏴󠁧󠁢󠁷󠁬󠁳󠁿
                </a> <b>North Wales</b>, currently studying at the 
                <a className='pl-1' href="https://warwick.ac.uk" target="_blank">
                    <img className='inline' src="https://raw.githubusercontent.com/stormforcejj/stormforcejj/main/warwick circle.png" width="20"/>
                </a> <b>University of Warwick</b></p>
            {/* <h2 className='text-[27px] font-extrabold pt-5'>What am I doing at the moment?</h2>
            <p className='text-lg'></p> */}
            <h2 className='text-[27px] font-extrabold pt-5'>Technologies</h2>
            <div className="mx-10 my-3">
                {/* <div className="grid grid-cols-1 gap-4 text-lg sm:grid-cols-2 md:grid-cols-5">
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
                        <span><Html5 className='inline-flex align-text-top' color='#E34F26' size={20}/><span className='pl-2'>HTML</span></span>
                    </div>
                    <div>
                        <span><CssThree className='inline-flex align-text-top' color='#1572B6' size={20}/><span className='pl-2'>CSS</span></span>
                    </div>
                    <div>
                        <span><Python className='inline-flex align-text-top' color='#f7ca3e' size={20}/><span className='pl-2'>Python</span></span>
                    </div>
                    <div>
                        <span><Visualstudiocode className='inline-flex align-text-top' color='#007ACC' size={20}/><span className='pl-2'>VS Code</span></span>
                    </div>
                    <div>
                        <span><Github className='inline-flex align-text-top' color='#fff' size={20}/><span className='pl-2'>Github</span></span>
                    </div>
                </div> */}
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
                        <span><Obsidian className='inline-flex align-text-top' color='#7C3AED' size={20}/><span className='pl-2'>Obsidian</span></span>
                    </div>
                    <div>
                        <span><Visualstudiocode className='inline-flex align-text-top' color='#007ACC' size={20}/><span className='pl-2'>VS Code</span></span>
                    </div>
                    <div>
                        <span><Github className='inline-flex align-text-top' color='#fff' size={20}/><span className='pl-2'>Github</span></span>
                    </div>
                </div>
            </div>
            <div className="my-7 text-neutral-600">
                <hr className='border-neutral-900' />
                <div className="">
                    <h2 className='text-[35px] font-extrabold pt-5'>James</h2>
                    <p className='text-[20px]'>stormforcejj.co.uk • 2025</p>
                </div>
            </div>
        </section>
    </div>
    )
}
