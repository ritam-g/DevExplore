import { sayHello } from 'ritam-incident-sdk'
import { CodeBloded } from 'codebloded-sdk'

const codeBloded = new CodeBloded({ apiKey: 'YOUR_API_KEY' })


async function reportingIncident() {
    const response = await codeBloded.reportIncident({
        message: 'Server is down',
        service: 'User Service',
        severity: 'high'
    })

    console.log('Incident reported:', response)
}

reportingIncident()
sayHello()