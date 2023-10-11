const JSON_URL = "http://localhost:2970/todos";

export const getTodos = () => {
  return fetch(JSON_URL).then((response) => response.json());
};

export const createTodo = (name) => {
  return fetch(JSON_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      name,
    }),
  }).then((response) => response.json());
};

export const deleteTodo = (id) => {
  return fetch(`${JSON_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  }).then((response) => response.json());
};

export const editTodo = (id, newName) => {
  return fetch(`${JSON_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      name: newName,
    }),
  }).then((response) => response.json());
};
