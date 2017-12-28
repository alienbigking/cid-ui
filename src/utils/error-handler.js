export default {
    handle(response, message, text) {
        if (response && response.status === 400) {
            if (response.data && response.data.code) {
                message.error(response.data.message);
                return;
            }
        }
        message.error(text);
    }
};
