# react5
- Creating react using vite

            npm install -g  create-vite

- Next create an application

            '''' 
            npm create vite@latest my-react-app -- --template react 
            ''''

- If you get a message press y to mean yes. use vite experimentally but do not install npm yet

- Sfter this install the dependancy go inside the react app 
            
            '''
             cd my-react-app 
             ''' 

- Run npm iside 
            
            ''' 
            npm install 
            ''' 
- If you find 0 vulnerability continue

            ''' 
            npm run dev 
            ''' 
            
- This takes us to the react and vite intro portal

# lists
- In React, you will render lists with some type of loop. The JavaScript map() array method is generally the preferred method.
```
import { createRoot } from 'react-dom/client'

function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li>I am a { car }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);
```

- Keys allow React to keep track of elements. If an item is updated or removed, only that item will be re-rendered instead of the entire list. Keys must be unique among siblings, but they don't have to be unique across the entire application.

```
import { createRoot } from 'react-dom/client'

function MyCars() {
  const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
  ];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);

```
**Using Array Index as Keys**
- While it's possible to use the array index as a key, it's not recommended unless:

The list is static (won't change)
The list will never be reordered or filtered
The items in the list have no IDs

```
function MyCars() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);
```

# Forms
- Just like in HTML, React uses forms to allow users to interact with the web page.
- You add a form with React like any other element:

```
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
```

*HTML Forms vs. React Forms*

- In React, form elements like <input>, <textarea>, and <select> work a bit differently from traditional HTML.
- For example, an <input type="text"> field keeps track of its own value in the HTML DOM.
- We can use the useState Hook to keep track of each input value and provide a "single source of truth" for the entire application.

```
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
```

 Import the useState Hook from React:

```import { useState } from 'react';```

2. Declare a state variable to hold the input's value and a function to update it:

```const [name, setName] = useState("");```

3. Create a function to handle the change event:

```function handleChange(e) {
  setName(e.target.value);
}
```

4. Set the value of the input field to the state variable and the onChange attribute to handle the change event:

```
<input
  type="text" 
  value={name}
  onChange={handleChange}
/>
```

5. Display the current value to show that the value is being updated:

```
<p>Current value: {name}</p>
```

# submit forms

- You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:

```
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
```

# Text Area
- We'll use the useState Hook to manage the value of the textarea:
```
import { createRoot } from 'react-dom/client'
import { useState } from 'react'

function MyForm() {
  const [mytxt, setMytxt] = useState("");

  function handleChange(e) {
    setMytxt(e.target.value);
  }

  return (
    <form>
      <label>Write here:
        <textarea
          value={mytxt}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {mytxt}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
```

# select
- A drop down list, or a select box, in React is also a bit different from HTML. In HTML, the selected value in the drop down list is defined with the selected attribute:

```
import { createRoot } from 'react-dom/client'
import { useState } from 'react'

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
```

# Multiple input fields

- When you have multiple controlled input fields in a form, you can manage their state either by:

1. Using a separate useState call for each input.
2. Using a single useState call with an object to hold all form field values.

```
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
        </label>
        <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
```

The first thing to notice is that when using a single useState call, we use an object to hold any initial values. In this case, with no initial values, we use an empty object:

```
const [inputs, setInputs] = useState({});
```

Next, the handleChange function is updated to handle multiple input fields.

In the function, we access the input fields in the event handler using the e.target.name and e.target.value syntax.

To update the state, use square brackets [bracket notation] around the property name.

```
function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  setInputs(values => ({...values, [name]: value}))
}
```

When refering to input values, we add the name of the state object, inputs, as well as the name of the input field:

```
<input 
  type="text" 
  name="firstname" 
  value={inputs.firstname} 
  onChange={handleChange}
/>
<input 
  type="text" 
  name="lastname" 
  value={inputs.lastname} 
  onChange={handleChange}
/>
<p>Current values: {inputs.firstname} {inputs.lastname}</p>

```

- To add initial values

```
function MyForm() {
  const [inputs, setInputs] = useState({
    firstname: 'John',
    lastname: 'Doe'
  });
  ```

  # Checkbox

- For checkboxes, use the checked attribute instead of value to control its state. We'll use the useState Hook to manage the value of the textarea:

- In the handleChange function, use the e.target.type property check if the current input is a checkbox or not.

```
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    let fillings = '';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>My name is:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>

      <p>I want a burger with:</p>
      <label>Tomato:
      <input 
        type="checkbox" 
        name="tomato" 
        checked={inputs.tomato} 
        onChange={handleChange}
      />
      </label>
      <label>Onion:
        <input 
          type="checkbox" 
          name="onion" 
          checked={inputs.onion} 
          onChange={handleChange}
        />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
```
- to have initial values

```
function MyForm() {
  const [inputs, setInputs] = useState({
    firstname: 'John',
    tomato: true,
    onion: false
  });

  ```

# Radio

- Radio buttons are typically used in groups where only one option can be selected.

```
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Your favorite fruit is: ${selectedFruit}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} /> Apple
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} /> Banana
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="cherry" 
          checked={selectedFruit === 'cherry'} 
          onChange={handleChange} /> Cherry
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
```

