/**
 * Created by lenovo on 2017/9/7.
 */
import request from '../utils/request.js';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}

//增加用户删除功能
export function remove(id) {
  return request(`/api/users/${id}`,{
    method: 'DELETE'
  })
}

//处理用户编辑
export function patch(id, values) {
  return request(`/api/users/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(values)
  })
}
