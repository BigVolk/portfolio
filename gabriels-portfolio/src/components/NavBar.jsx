import { MenuItem, Toolbar, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { TextSettings } from '../constanst';

const NavBar = () => {
    const menuItemsInfo = [
        {
            title: "המספר שלי",
            link: "/"
        }, 
        {
            title:"למה לבחור בי?",
            link: "/"
        }, 
        {
            title:"מיקום",
            link: "/"
        }, 
        {
            title:"הזמנת שיעור",
            link: "/"
        }
    ]

    return (
        <>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Menu open={true} >
                            {menuItemsInfo.map((itemName) => (
                                <MenuItem>
                                    <Typography
                                        gutterBottom={true}
                                        sx={
                                            {
                                                direction: TextSettings.textDirection,
                                                textDecoration: "underLine"
                                            }
                                        }
                                    >{itemName.title}</Typography>
                                </MenuItem>
                            )
                            )}
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar