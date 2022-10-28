import profileImage from './profilePicture.jpeg'
import slackPic from './slack.png'
import gitPic from './Icon.png'
import Pic1 from './logo.36d2d48a.png'
import Pic2 from './I4G.png'
export const UserDetails = [
    {
        id: 'twitter',
        userNameTwitter: 'valentinaBuoro',
        userImage: `${profileImage}`,
        userNameSlack: '@bigTeenz'
    }
];

export const userLinks = [
    {
        id: 'twitter',
        title: 'Twitter-Link',
        link: 'https://twitter.com/valentinaBuoro'
    },
    {   id: 'zuri__team',
        title: 'Zuri Team',
        link: 'https://training.zuri.team'
    },
    {   id: 'books',
        title: 'Zuri Books',
        link: ' http://books.zuri.team'
    },
    {
        id: 'book__python',
        title: 'Python Books',
        link: 'https://books.zuri.team/python-for-beginners?ref_id=elijah-igbokah'
    },
    {
        id: 'pitch',
        title: 'Background Check for Coders',
        link: 'https://background.zuri.team'
    },
    {
        id: 'book__design',
        title: 'Design Books',
        link: 'https://books.zuri.team/design-rules'
    }
];  

export const SocialLinks=[
    {
        slackImage: `${slackPic}`,
        gitImage: `${gitPic}`,  
    }
]
export const FooterLinks=[
    {
        Image1: `${Pic1}`,
        Image2: `${Pic2}`,  
    }
]