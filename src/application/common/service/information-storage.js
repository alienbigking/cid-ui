export default {
    decodeInformation() {
        const informationStorage = localStorage.getItem('personalInformation');
        if (informationStorage) {
            const personalInformation = JSON.parse(informationStorage);
            return personalInformation;
        }
    }
};
