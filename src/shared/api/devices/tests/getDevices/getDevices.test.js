const getDevices = require('./getDevices');
const axios = require('axios')

jest.mock('axios')

describe('getData', () => {
    let response
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 9,
                    "attributes": {
                      "deviceImage": "device.webp",
                      "processing.copyAttributes": "",
                      "decoder.timezone": "",
                      "speedLimit": 53.9956803455724,
                      "web.reportColor": "красный",
                      "deviceInactivityStart": 15
                    },
                    "groupId": 0,
                    "calendarId": 0,
                    "protocol": null,
                    "name": "Монтажник тест ",
                    "uniqueId": "135079",
                    "status": "online",
                    "lastUpdate": "2024-08-08T17:19:49.286+00:00",
                    "positionId": 19562950,
                    "phone": null,
                    "model": null,
                    "contact": null,
                    "category": null,
                    "disabled": false,
                    "expirationTime": null
                  },
                  {
                    "id": 2,
                    "attributes": {
                
                    },
                    "groupId": 0,
                    "calendarId": 0,
                    "protocol": null,
                    "name": "Тест",
                    "uniqueId": "550393",
                    "status": "offline",
                    "lastUpdate": "2023-11-27T07:47:46.000+00:00",
                    "positionId": 131758,
                    "phone": null,
                    "model": null,
                    "contact": null,
                    "category": null,
                    "disabled": false,
                    "expirationTime": null
                  }
            ]
        }
    })
    test('Корректное значение', async () => {
        axios.get.mockReturnValue(response);
        const data = await getDevices()
        expect(data).toEqual(response)
        expect(data).toMatchSnapshot()
    })
})
