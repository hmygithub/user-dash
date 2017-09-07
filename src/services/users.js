/**
 * Created by lenovo on 2017/9/7.
 */
import request from '../utils/request.js';

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=5`);
}
