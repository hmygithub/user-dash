/**
 * Created by lenovo on 2017/9/7.
 */
import request from '../utils/request.js';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}
