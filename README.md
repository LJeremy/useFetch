<h1  align="center">⚛️ useFetch 👋</h1>
<p>
<img  alt="Version"  src="https://img.shields.io/badge/version-0.0.4-blue.svg?cacheSeconds=2592000"  />
</p>

> ⚛️ React Hook for Fetching Data & caching it in Localstorage

## Install

```sh
npm install usefetch-caching
```

## Usage

Firstly, Import the package:

```sh

import { useFetch } from 'usefetch-caching';

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

[![Edit restless-leaf-b32hd](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/restless-leaf-b32hd?fontsize=14)

## Author

👤 **Lars**

- Github: [@LJeremy](https://github.com/LJeremy)

## Show your support

Give a ⭐️ if this project helped you!
