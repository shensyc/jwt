import axios from '../lib/AjaxRequest';

export const getTest = ()=>axios.request({url:'/test'});
export const login = username =>axios.request({url:'/login',method:'POST',data:{username}});

export const validate = () =>axios.request({url:'/validate'});
export default {};