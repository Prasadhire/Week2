import { fetchUsers } from './Day4_api.js';
import { renderUsers } from './Day4_dom.js';

const startApp = async () => {
  const users = await fetchUsers();
  renderUsers(users);
};

startApp();
