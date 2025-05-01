import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Discord, Spotify, Flickr } from '@icons-pack/react-simple-icons';

export default function Index() {
    return (
    <div className="space-y-5">
        <Head>
            <title>• James</title>
            <meta name="" content="" />
            <link rel="icon" href="/favicon.svg" />
        </Head>   
            <h1 className='text-[50px] font-extrabold'>Blog 📕</h1>
            <h2 className='text-[27px] font-extrabold'>The Fundamentals of Computer Security - A Basic Guide</h2>
            <p className='mb-3 text-neutral-600'>30-04-2025 - James</p>
            
            <p>&quot;There is no such thing as computer security, unless you don&#39;t use a computer&quot;</p>
            <p>In a modern world where cyber security attacks are becoming increasingly prevalent, it is all the more important to have a firm grip on security concepts to ensure that your next project doesn&#39;t become the next big news story.</p>
            <p>When considering computer security, there is no one size fixes all solution. Modern software and hardware are made up of such a complicated web of interconnecting parts that there is almost certainly a vulnerability in any application you write. Even if the code you write is flawless, an external library may have a vulnerability.</p>
            <p>When considering security, we need to consider many different things, such as:</p>

            <ul className='px-6 list-disc'>
                <li>Security in which aspects
                    <ul className='px-6 list-disc'>
                        <li>Do you want to ensure that your services are always available, or keep data stored secure, or prevent reputational damage etc.</li>
                    </ul>
                </li>
                <li>Security from whom
                    <ul className='px-6 list-disc'>
                        <li>Are you securing the program against all users, or just ones in a specific organisation</li>
                    </ul>
                </li>
                <li>Security to what level
                    <ul className='px-6 list-disc'>
                        <li>Higher levels of security will require more investment, at what point is the cost too much?</li>
                    </ul>
                </li>
            </ul>

            <p>When writing a secure application, the goal should not to be to provide 100% security - this is impossible - instead the goal should be to reduce the risk to an acceptable level.</p>

            <h3 id="key-terms" className='font-extrabold text-[20px]'>Key Terms</h3>
            <ul className='px-6 list-disc'>
                <li><b>Asset</b> → What we are trying to protect</li>
                <li><b>Vulnerability</b> → A issue with the application that could be exploited for malicious purposes</li>
                <li><b>Countermeasures</b> → Specific actions and defences against an attack, such as having a firewall or intrusion detection systems</li>
                <li><b>Trust</b> → Most secure systems rely on trust, whether it be users, a trusted third part / host, or even trusting the underlying hardware and compiler</li>
                <li><b>Risk</b> → The probability of an attack causing loss or damage</li>
            </ul>

            <h3 id="risk-management-strategies" className='font-extrabold text-[20px]'>Risk Management Strategies</h3>
            <ul className='px-6 list-disc'>
                <li><b>Fix Vulnerabilities</b> → This removes the ability to exploit them, but in removing them new vulnerabilities could be introduced</li>
                <li><b>Accept the Risk</b> → If the risk is very very small, it could simply be ignored</li>
                <li><b>Avoid the Risk</b> → For example block all the requests from a hostile country</li>
                <li><b>Detection &amp; Reaction</b> → React after / during the attack, not always guaranteed to work</li>
            </ul>
            
            <hr className='border-neutral-900 my-7' />

            <p>This is just a basic introduction into the languages of cyber security, and has hopefully provided an insight into this ever evolving world. Cyber security covers many aspects that haven&#39;t even been touched on here, from encryption to viruses there&#39;s a whole world out there, even physical security must be contented with in matters such as hardware destruction. I&#39;ve attached below some entertaining cyber security content that can give you a good insight into the field.</p>
            <p><b>Some Entertaining Cyber Security Content</b></p>
            
            <ul className='px-6 list-disc'>
                <li><a className='text-blue-600' href="https://www.youtube.com/@kevinfaang" target='_blank' rel='noopener noreferrer'>https://www.youtube.com/@kevinfaang</a></li>
                <li><a className='text-blue-600' href="https://www.youtube.com/results?search_query=tom+scott+cybersecurity" target='_blank' rel='noopener noreferrer'>https://www.youtube.com/results?search_query=tom+scott+cybersecurity</a></li>
            </ul>


            <div className="my-7 text-neutral-600">
                <hr className='border-neutral-900' />
                <div className="">
                    <h2 className='text-[35px] font-extrabold pt-5'>James</h2>
                    <p className='text-[20px]'>stormforcejj.co.uk • 2025 • 5639574</p>
                </div>
            </div>
    </div>
    )
}
