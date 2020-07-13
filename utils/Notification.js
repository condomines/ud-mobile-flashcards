import { Notifications } from 'expo'

import * as Permissions from 'expo-permissions'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'UD-Mobile-Flashcards-Decks:notifications'

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}
  
function createNotification () {
    return {
        title: 'Complete a quiz today!',
        body: "👋 Don't forget to study a bit today!",
        ios: {
        sound: true,
        },
        android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
        }
    }
}
  
export function setLocalNotification () {
    console.log('setLocalNotification ')
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        console.log('data', data)
        if (data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if (status === 'granted' || status === 'undetermined') {
                Notifications.cancelAllScheduledNotificationsAsync()

                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(19,59)

                Notifications.scheduleLocalNotificationAsync(
                    createNotification(),
                    {
                    time: tomorrow,
                    repeat: 'day',
                    }
                )

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}
