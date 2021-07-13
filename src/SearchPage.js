import React from 'react'
import './searchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChanneRow';
import VideoRow  from './VideoRow';

function SearchPage() {
    return (
        <div className="serchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image ='https://yt3.ggpht.com/ytc/AAUvwnjhJO9ahyfZuEJrccL3VSjaOyGlbVtJ3SnCXCLeSg=s88-c-k-c0x00ffffff-no-rj'
                channel= 'Code With Yaji'
                verified
                subs = '100k'
                noOfVideos= {30}
                description ='Learn how to become successful programmer.
                                Master in Javascript, React js, Node.'
            />
            <hr />

            <VideoRow 
                views ='30k'
                subs ='100k'
                description ='Mistakes are part of coding and every programmer makes tones of mistakes especially as a beginner but that’s how they grow and become a good developer. '
                timestamp = '59 min ago'
                channel ='Code With Yaji'
                image ='https://img.youtube.com/vi/IufviPgQ-Gc/maxresdefault.jpg'
                title ='Biggest Beginner Programmer Mistakes You Must Avoid'
                
            />
            <VideoRow 
                views ='10k'
                subs ='100k'
                description ='You all disserve successful in your programming currier. And I’m here to help you therefore SUBSCRIBE and turn on that notification bell so you will get notification of my precious videos.  '
                timestamp = '2 min ago'
                channel ='Code With Yaji'
                image ='https://img.youtube.com/vi/8L4wi3wbNWo/maxresdefault.jpg'
                title ='Best Free Resources To Learn Web Development In 2021|| Free Certificates'
                
            />
            <VideoRow 
                views ='10k'
                subs ='100k'
                description ='"Top 10 Programming Languages in 2021" will take you through the most trending and demanding programming languages which you must learn to succeed in your career in 2021. '
                timestamp = 'Premiered Feb 1, 2021'
                channel ='Code With Yaji'
                image ='https://img.youtube.com/vi/whafzS_tcoU/maxresdefault.jpg'
                title ='Best Programming Language To Learn In 2021 '
                
            />
            <VideoRow 
                views ='2,013,740'
                subs ='3M'
                description ='Wondering how to learn to code? What programming languages to learn? Watch this video to find out. 
                Python tutorial for beginner'
                timestamp = 'Premiered Feb 1, 2021'
                channel ='Programming with Mosh'
                image ='https://img.youtube.com/vi/r16Rn4_jDfk/maxresdefault.jpg'
                title ='How to Learn to Code and Make $60k+ a Year'
                
            />
            <VideoRow 
                views ='24,013'
                subs ='170k'
                description ='Today I ll be talking about few habits that I adopted as a student to improve my college life. These hacks have helped me stay more productive, get more work done and also do somewhat well at BITS Pilani. Some of the include reading, waking up early, and networking and talking to people. '
                timestamp = 'Mar 28, 2021'
                channel = 'Curious Harish'
                image ='https://img.youtube.com/vi/8NKSc9dIT2c/maxresdefault.jpg'
                title ='3 Habits that Improved My Student Life at BITS Pilani | Productivity Tips | College life '
                
            />
            <VideoRow 
                views ='165,317'
                subs ='170k'
                description ='Today I ll be talking about few habits that I adopted as a student to improve my college life. These hacks have helped me stay more productive, get more work done and also do somewhat well at BITS Pilani. Some of the include reading, waking up early, and networking and talking to people. '
                timestamp = 'Nov 11, 2019'
                channel = 'Traversy Media'
                image ='https://img.youtube.com/vi/g_aMpyMvQ9k/maxresdefault.jpg'
                title ='Escape Tutorial Hell & Utilize Them In A Better Way'
                
            />
        </div>
    )
}

export default SearchPage
