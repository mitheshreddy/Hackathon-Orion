import axios from 'axios';

const allergySummaryServiceFactory = () => ({
    getAllergySummary: patientId => (
        axios.get('http://10.171.206.18:9090/test-services/webapi/physicians', {
            headers: {
                Accept: 'application/json',
            },
        }).then(response => (
            response.data
        ))
    ),
});

export default allergySummaryServiceFactory();