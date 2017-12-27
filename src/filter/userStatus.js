export default{
    userStatus(status) {
        console.log(status);
        switch (status) {
            case 'Enabled':
                          return '使用中';
            case "Disabled":
                          return "已注销";
            default :
                          return '';
        }
    }
};
