import { AccessTimeOutlined, LocationOnOutlined } from '@material-ui/icons'
import { CalendarMonthOutlined } from '@mui/icons-material'
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded';

import Sidama from './images/teamsLogo/SidamaFC.png';
import Coffee from './images/teamsLogo/Ethiopian_CoffeeFC.png';
import Wolkite from './images/teamsLogo/Wolkite_CityFC.png';
import Saint from './images/teamsLogo/Saint_GeorgeFC.png';
import Bahir from './images/teamsLogo/Bahir_Dar_KenemaFC.png';
import Fasil from './images/teamsLogo/Fasil_KenemaFC.png';
import Wolaitta from './images/teamsLogo/wolaita_dichaFC.png';
import Jimma from './images/teamsLogo/Jimma_Aba_JifarFC.png';
import Mekelle from './images/teamsLogo/Mekelle_70_EndertaFC.png';
import Hawassa from './images/teamsLogo/Hawassa_CityFC.png';

const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Fixtures",
        path: '/fixtures'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Contact",
        path: '/contact'
    },
    {
        name: "Login",
        path: '/login'
    },
    {
        name: "Register",
        path: '/register'
    }
]

const stories = [
    {
        id: 1,
        icon: <SportsSoccerRoundedIcon />,
        title: "Overview",
        desc: "Getting a football match ticket manually would take your precious time and make you incur extra expenses. Some ticket holders would also miss the match due to an inappropriate checkout process at the entrance to the stadium. Join the technology world today. Save your time and money. Enjoy"
    }
]

const faqs = [
    {
        id: 1,
        question: "How Can I get the ticket?",
        answer: "First, you must register if you haven't registered yet or login if you have an account. Then, go to the fixtures page and select the match for which you want a ticket..."
    },
    {
        id: 2,
        question: "Can I get the ticket without logging in or registering?",
        answer: "No, In order to get the ticket, you must login or register."
    },
    {
        id: 3,
        question: "What are the requirements for registration?",
        answer: "To register, you only need a name, active email addresses, and a password. Simple and Easy."
    },
    {
        id: 4,
        question: "What are the benefits of getting the ticket online?",
        answer: "As we all know, getting the ticket manually will consume a lot of our time..."
    },
    {
        id: 5,
        question: "When will the ticket expire?",
        answer: "The ticket will expire after the match is over."
    },
    {
        id: 6,
        question: "Can I get a ticket for other sports activities?",
        answer: "At the moment, on this website, you can only get tickets for all Ethiopian Premier League games; however, in the future, you can get ticket for other sports activities too."
    }
]

const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]

const date = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const fixtures = [
    {
        id: 1,
        locationIcon: <LocationOnOutlined style={{fontSize:"15px"}}/>,
        stadium: "Addis Ababa",
        calendarIcon: <CalendarMonthOutlined />,
        Date: date.toLocaleString('en-IN', options),
        team1: "Sidama Coffee FC",
        team1Image: <img src={Sidama} alt="Team 1 Logo" />,
        timeIcon: <AccessTimeOutlined style={{fontSize:"15px"}} />,
        time: "15:00",
        team2Image: <img src={Coffee} alt="Team 2 Logo" />,
        team2: "Ethiopian Coffee FC",
    },
    {
        id: 2,
        locationIcon: <LocationOnOutlined style={{fontSize:"15px"}}/>,
        stadium: "Addis Ababa",
        calendarIcon: <CalendarMonthOutlined />,
        Date: date.toLocaleString('en-IN', options),
        team1: "Bahir Dar FC",
        team1Image: <img src={Bahir} alt="Team 1 Logo" />,
        timeIcon: <AccessTimeOutlined style={{fontSize:"15px"}} />,
        time: "15:00",
        team2Image: <img src={Wolkite} alt="Team 2 Logo" />,
        team2: "Wolkite FC",
    },
    {
        id: 3,
        locationIcon: <LocationOnOutlined style={{fontSize:"15px"}}/>,
        stadium: "Addis Ababa",
        calendarIcon: <CalendarMonthOutlined />,
        Date: date.toLocaleString('en-IN', options),
        team1: "Hawassa FC",
        team1Image: <img src={Hawassa} alt="Team 1 Logo" />,
        timeIcon: <AccessTimeOutlined style={{fontSize:"15px"}} />,
        time: "15:00",
        team2Image: <img src={Wolaitta} alt="Team 2 Logo" />,
        team2: "Wolaitta FC",
    },
    {
        id: 4,
        locationIcon: <LocationOnOutlined style={{fontSize:"15px"}}/>,
        stadium: "Addis Ababa",
        calendarIcon: <CalendarMonthOutlined />,
        Date: date.toLocaleString('en-IN', options),
        team1: "Saint Geo. FC",
        team1Image: <img src={Saint} alt="Team 1 Logo" />,
        timeIcon: <AccessTimeOutlined style={{fontSize:"15px"}} />,
        time: "15:00",
        team2Image: <img src={Fasil} alt="Team 2 Logo" />,
        team2: "Fasil FC",
    },
    {
        id: 5,
        locationIcon: <LocationOnOutlined style={{fontSize:"15px"}}/>,
        stadium: "Addis Ababa",
        calendarIcon: <CalendarMonthOutlined />,
        Date: date.toLocaleString('en-IN', options),
        team1: "Jimma FC",
        team1Image: <img src={Jimma} alt="Team 1 Logo" />,
        timeIcon: <AccessTimeOutlined style={{fontSize:"15px"}} />,
        time: "15:00",
        team2Image: <img src={Mekelle} alt="Team 2 Logo" />,
        team2: "Mekelle FC",
    }
]

const teams = [
    {
        id: 1,
        name: "Adama City FC"
    },
    {
        id: 2,
        name: "Arba Minch City FC"
    },
    {
        id: 3,
        name: "Bahir Dar Kenema FC"
    },
    {
        id: 4,
        name: "Defence Force FC"
    },
    {
        id: 5,
        name: "Ethio Electric FC"
    },
    {
        id: 6,
        name: "Ethiopian Coffee FC"
    },
    {
        id: 7,
        name: "Fasil Kenema FC"
    },
    {
        id: 8,
        name: "Hadiya Hossana FC"
    },
    {
        id: 9,
        name: "Hawassa Kenema FC"
    },
    {
        id: 10,
        name: "Jimma Aba Jifar FC"
    },
    {
        id: 11,
        name: "Mekelle 70 Enderta FC"
    },
    {
        id: 12,
        name: "Saint George FC"
    },
    {
        id: 13,
        name: "Sidama Coffee FC"
    },
    {
        id: 14,
        name: "Wolaitta Dicha FC"
    },
    {
        id: 15,
        name: "Wolkite City FC"
    },
]
export { links, stories, faqs, testimonials, fixtures, teams }