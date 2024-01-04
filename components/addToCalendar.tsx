'use client'

import { AddToCalendarButton } from 'add-to-calendar-button-react';

export default function AddToCalendar({match}: any) {
    const startDate = (match.date).slice(0,10)
    const matchStartTime = match.time !== 'TBD' ? match.time : '12:00'
    const matchHour = matchStartTime.split(':')
    const matchEndTime = `${(parseInt(matchHour[0]) + 2).toString()}:00`

    return (
        <AddToCalendarButton
            name={`${match?.homeTeam?.teamName} vs ${match?.awayTeam?.teamName}`}
            options={['Apple','Google']}
            location={match?.homeTeam?.location}
            startDate={startDate}
            startTime={matchStartTime}
            endTime={matchEndTime}
            timeZone="America/New_York"
            lightMode="bodyScheme"
            buttonsList
            hideTextLabelButton
            buttonStyle="round"
        />
    )
}