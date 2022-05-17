import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItems from './FeedbackItems'
import {useContext} from 'react'
import FeedBackContext from './context/FeedBackContext'

function FeedbackList() {
  const{ feedback } = useContext(FeedBackContext)

  if(!feedback || feedback.length === 0){
    return <p>No feedback yet </p>
  }
/*   return <div className="feedback-list">
    {feedback.map((item) => (
      <FeedbackItems
        key ={item.id}
        item={item}
        handleDelete={handleDelete}
      />
    ))} </div> */
    return <div className="feedback-list">
      <AnimatePresence>
    {feedback.map((item) => (
      <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <FeedbackItems
        key ={item.id}
        item={item}
      /> </motion.div>
    ))} </AnimatePresence> </div>
}



export default FeedbackList