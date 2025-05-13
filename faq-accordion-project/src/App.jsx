import './App.css'
import starIcon from '../assets/images/icon-star.svg'
import FAQsComponent from './FAQsComponent'
function App() {

  const FAQs = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      question: 'Is Frontend Mentor free?',
      answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellentway to showcase your skills to potential employers!"
    },
    {
      question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    },
    
  ]

  return (
    <main className="bg-[url(./assets/images/background-pattern-mobile.svg)] bg-purple-200 bg-contain bg-top bg-no-repeat h-screen">
      <div className="card w-5/6 bg-white rounded-md absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 p-6 shadow-lg">
        <div className="head flex gap-x-2 items-center mb-6">
          <div className="star-icon">
            <img src={starIcon} alt="" className='w-7 h-7'/>
          </div>
          <h1 className="text-3xl text-purple-950 font-bold tracking-wide">FAQs</h1>
        </div>
        <div>
          {
            FAQs.map((item, index) => (
              <FAQsComponent 
                key={index} 
                question={item.question} 
                answer={item.answer}
              />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default App
