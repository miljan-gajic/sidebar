### This is a Vite bootstrapped React Application for presenting a Sidebar component

#### Packages added

- Node Types :
  - This is a dev package to stop showing the errors in Vite config since we need additional config for import aliases to make DX a bit better
- classnames
  - This is to chain multiple css classes in an object kind of way
- vite plugin svgr
  - This is only for handling svgs in Vite project

#### How to run the app?

For running the app locally just run the command below:

```sh
yarn dev
```

or

```sh
npm run dev
```

Also please make sure that all the packages are being installed by running the command `yarn install` or `npm install`

## Project Architecture and Structure

Most of the code lives in the `src` folder and looks like this. The various config files fill be at the `root` of the app folder

_Src folder structure should look like below_:

- assets
- components
- hooks
- store
- utils

Since I've used Context here if I had to initialize multiple different providers I would have also created a providers folder

Components folder contain all of the reusable components which are structured in a **Component Composition** way which can be incredibly powerful and makes your code more organized, avoid prop drilling, and even improve performance.

All reusable chunks of logic can be found in hooks. Custom hooks are powerful feature of React which makes your code both more readable and reusable

Also any reusable function are located in _utils_ folder. Function there are pure functions meaning they do not have any side effects and do not rely on outside data

## Adding new elements and content

### **Add a new menu elements**

To add new elements simply go into in `src/assets/data` there you will find file to add menu items to both files
with Categories and without

The data structure of menu elements is below

```json
[
  {
    "category": "Category title 1",
    "menuItems": [
      {
        "label": "item 1"
      },
      {
        "label": "item 2"
      }
    ]
  },
  {
    "category": "Category title 2",
    "menuItems": [
      {
        "label": "item 3"
      },
      {
        "label": "item 4"
      }
    ]
  }
]
```

The data structure for the menu elements that does not contain a category:

```json
[
  {
    "label": "Item 1"
  },
  {
    "label": "Item 2"
  },
  {
    "label": "Item 3"
  }
]
```

### **Add additional content**

The additional content can be easily added as _children_ in **Content** component
