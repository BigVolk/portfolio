import { Button, MenuItem, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { TextSettings } from '../../constanst';
import '../../assests/fonts.css';
import './NavBar.css'

const NavBar = () => {
    const menuItemsInfo = [
        {
            title: "המספר שלי",
            action: () => { console.log("wow") }
        },
        {
            title: "למה לבחור בי?",
            action: () => { window.open("/", "_self") }
        },
        {
            title: "מיקום",
            action: () => { console.log("wow") }

        },
        {
            title: "הזמנת שיעור",
            action: () => { window.open('/reserve-lesson', "_self") }
        }
    ]

    return (
        <>
            <AppBar position='fixed'>
                <Container maxWidth="xl">
                    <Toolbar sx={{ dispaly: 'flex', justifyContent: 'space-between' }}>
                        {menuItemsInfo.map((itemName) => (
                            <Button
                                onClick={itemName.action}
                                className='text'
                                sx={
                                    Object.assign({}, TextSettings, {
                                        textDecoration: "underLine",
                                        color: "white",
                                    })
                                }
                            >
                                {itemName.title}
                            </Button>
                        )
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar