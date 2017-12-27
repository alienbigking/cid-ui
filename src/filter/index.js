export default {
    config(vue) {
        vue.filter('convertToText', (value, optionValues) => {
            if (!value) return '';
            value = value.toString();
            const optionValue = optionValues.find(ov => ov.value === value);
            if (!optionValue) {
                return '';
            }
            return optionValue.text;
        });
    }
};
