import React from 'react';
// STYLE
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import Coin from 'assets/images/coin.png';
// HOOKS
import useTranslationWithNamespaces from 'hooks/useTranslationWithNamespaces';
// COMPONENTS
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const AppBar = ({ toggleOpen }) => {
  const { t } = useTranslationWithNamespaces();

  return (
    <MuiAppBar position="fixed" id="appBar">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="flex-end">
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <img src={Coin} style={{ width: 40, height: 40 }} alt="coin" />
              </Grid>
              <Grid item>
                <Grid container direction="column" sx={{ color: '#000000' }}>
                  <Grid
                    item
                    sx={{
                      fontFamily: 'Rambla, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.3rem',
                    }}
                  >
                    sprintform
                  </Grid>
                  <Grid item>{t.common('spending_tracker_tool')}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <LanguageSelector />
              </Grid>
              <Grid item>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={toggleOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
