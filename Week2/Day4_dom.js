export const renderUsers = (users) => {
    const list = document.getElementById("userList");
    list.innerHTML = "";
  
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      list.appendChild(li);
    });
  };
  