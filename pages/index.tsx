import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Discord, Nextdotjs, Nodedotjs, ReactJs, Html5, CssThree, Javascript, Tailwindcss, Python, Git, Visualstudiocode } from '@icons-pack/react-simple-icons';
import {IoLocationSharp} from 'react-icons/io5';

export default function Index() {
    return (
    <div className="">
        <Head>
            <title>Storm</title>
            <meta name="" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>   
        <section className=''>
            <div className="links"> 
                <ul className='flex font-bold'>
                    <li><Link href={'https://github.com/stormforcejj'} rel="noopener noreferrer" target="_blank"><Github className="justify-center mx-2" color='#fff' size={30} /></Link></li>
                    <li className='py-1'>
                        <Link href={'https://goo.gl/maps/Vev1nLPSzN9ztcYG8'}rel="noopener noreferrer" target="_blank">
                            <span className='justify-center px-6 py-2 m-2 font-bold rounded-l-full rounded-r-full bg-neutral-900 hover:bg-neutral-800'>Wales</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <h1 className='text-[50px] font-bold'>Hi, I'm Storm 👋</h1>
            <p className='text-lg'>I'm a 17 year old aspiring developer and student from Wales. I primarily deal with web technologies, such as NextJS or React, however I am always willing to give something new a try!</p>
            <h2 className='text-[35px] font-bold pt-5'>Lopsum Imspum</h2>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, consequatur? Atque iusto cum corrupti dignissimos asperiores quibusdam veniam iure hic inventore modi numquam, magni cupiditate nisi voluptatem quis provident veritatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem voluptate animi quidem qui incidunt, tempora perspiciatis eveniet est aliquam eius provident sit sed ipsa consequatur, debitis quae, recusandae distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vero reiciendis est, quo tenetur assumenda ducimus hic, modi accusantium natus accusamus unde animi? Laudantium molestias quisquam dolor quae tempore molestiae.</p>
            <h2 className='text-[35px] font-bold pt-5'>Experience</h2>
            <div className="mx-10 my-3">
                <div className="grid grid-cols-5 gap-4 text-lg">
                    <div className='flex inline'>
                        <span><Nextdotjs className='inline-flex align-center' color='#fff' size={20}/> NextJS</span>
                    </div>
                    <div>
                        <span><Nodedotjs className='inline-flex align-center' color='#fff' size={20}/> NodeJS</span>
                    </div>
                    <div>
                        <span><ReactJs className='inline-flex align-center' color='#fff' size={20}/> React</span>
                    </div>
                    <div>
                        <span><Javascript className='inline-flex align-center' color='#fff' size={20}/> JavaScript</span>
                    </div>
                    <div>
                        <span><Tailwindcss className='inline-flex align-center' color='#fff' size={20}/> TailwindCSS</span>
                    </div>
                    <div>
                        <span><Html5 className='inline-flex align-center' color='#fff' size={20}/> HTML</span>
                    </div>
                    <div>
                        <span><CssThree className='inline-flex align-center' color='#fff' size={20}/> CSS</span>
                    </div>
                    <div>
                        <span><Python className='inline-flex align-center' color='#fff' size={20}/> Python</span>
                    </div>
                    <div>
                        <span><Git className='inline-flex align-center' color='#fff' size={20}/> Git</span>
                    </div>
                    <div>
                        <span><Visualstudiocode className='inline-flex align-center' color='#fff' size={20}/> VS Code</span>
                    </div>
                </div>
            </div>
            <div className="my-7 text-neutral-600">
                <hr className='border-neutral-600' />
                <h2 className='text-[35px] font-bold pt-5'>Storm</h2>
                <p className='text-[20px]'>stormforcejj.co.uk • 2023</p>
            </div>
            

        </section>
    </div>
    )
}
