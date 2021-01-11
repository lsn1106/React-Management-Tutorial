import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': `https://placeimg.com/64/64/1`,
    'name': `이선노`,
    'birthday': `961106`,
    'sex': `남자`,
    'job': `대학생`
  },
  {
    'id': 2,
    'image': `https://placeimg.com/64/64/2`,
    'name': `브라이언`,
    'birthday': `961106`,
    'sex': `여자`,
    'job': `백수`
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': `다이아`,
    'birthday': `961106`,
    'sex': `남자`,
    'job': `디자이너`
  }

];


class App extends Component {
  render() {
    const classes = styles(createMuiTheme());
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>

              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} sex={c.sex} job={c.job} />) })}
          </TableBody>
        </Table>

      </Paper>
    );
  }
}

export default withStyles(styles)(App);                      
