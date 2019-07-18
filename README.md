<h1  align="center">⚛️ useFetch 👋</h1>
<p>
<img  alt="Version"  src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000"  />
</p>

> ⚛️ React Hook for Fetching Data & caching it in Localstorage

## Install

```sh
npm install usefetch-hook
```

## Usage

Firstly, Import the package:

```sh

import { useFetch } from 'usefetch-hook';

```

Fetch an URL and store the response:

```sh
const response = useFetch(
  `https://jsonplaceholder.typicode.com/todos`,
  'todos'
);
```

Example use case:

```
function Todos()  {

const response = useFetch(
  `https://jsonplaceholder.typicode.com/todos`,
  "todos"
);

return response != null  ? (
  response.map((todo, key)  => (
    <>
      <h3>{todo.title}</h3>
      <span>{todo.completed  ?  "✔️"  :  "❌"}</span>
    </>
  ))
  ) : (
    <>
      <span>No todo's</span>
    </>
  );
}

export default Todos;
```

## Author

👤 **Lars**

- Github: [@LJeremy](https://github.com/LJeremy)

## Show your support

Give a ⭐️ if this project helped you!
