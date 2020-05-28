import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color : {
        primary : '#F44336',
        secondary : '#00BCD4',
        error : '#FFCDD2',
    },
    typography:{
        fontFamily:'Roboto',
    },
    shape :{
        borderRadius: 4,
        backgroundColor : '#757575',
        textColor : '#FFFFFF',
        border :'#CCCCC'


    }
})

export default theme