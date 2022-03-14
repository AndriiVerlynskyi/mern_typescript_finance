import axios from 'axios';

export function getNavBarData () {
    return axios('http://localhost:5000/navBarData/getNavBarData');
}