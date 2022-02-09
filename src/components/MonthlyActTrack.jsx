import React, {useState} from 'react'
import InputBox from './MonthlyActivityTracker/InputBox'
import ActivityBlock from './MonthlyActivityTracker/ActivityBlock'

function MonthlyActTrack() {
    const [inputText, setInputText] = useState("");
    const [activities, setActivities] = useState([]);



    function createActivity() {
        const newActivity = {
            title: inputText,
            daysCompleted: []
        }

        setActivities((prevActivities) => {
            return [...prevActivities, newActivity]
        });

    }
    
    function completeDay(activityName, day) {
        
        const currentActivity = activities.find((activity) => {
            return activity.title === activityName
        });
        
        if (currentActivity) {
            currentActivity.daysCompleted.push({
                day: day
            })
        }
        
    }


  return (
    <div>
        <h1>Monthly Activity Tracker!</h1>
        <InputBox 
        inputText={inputText} 
        setInputText={setInputText} 
        createActivity={createActivity} 
        />
        <ActivityBlock />
    </div>
  )
}

export default MonthlyActTrack