import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {id: 1,
        text: 'this is from aksdmaksd',
            rating: 10,
        },
        {id: 2,
            text: 'this is from aksdmaksd',
                rating: 5,
        },
        {id: 3,
            text: 'this is from aksdmaksd',
                rating: 6,
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }


    const updateFeedback = ((id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    })

    return <FeedbackContext.Provider value={{
        feedback, addFeedback, deleteFeedback, editFeedback, feedbackEdit, updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext