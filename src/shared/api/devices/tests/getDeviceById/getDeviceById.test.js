const getDeviceById = require('./getDeviceById');
const axios = require('axios');

jest.mock('axios');

describe('getDeviceById', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 2,
                    attributes: {},
                    groupId: 0,
                    calendarId: 0,
                    protocol: null,
                    name: 'Тест',
                    uniqueId: '550393',
                    status: 'offline',
                    lastUpdate: '2023-11-27T07:47:46.000+00:00',
                    positionId: 131758,
                    phone: null,
                    model: null,
                    contact: null,
                    category: null,
                    disabled: false,
                    expirationTime: null,
                },
            ],
        };
    });
    test('Корректное значение', async () => {
        axios.get.mockReturnValue(response);
        const data = await getDeviceById(2);
        expect(data).toEqual(response);
        expect(data).toMatchSnapshot()
    });
});
