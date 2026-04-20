# @ankjs/react-ui

## 📜 Introduction
A simple React UI Library
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/%40ankjs%2Freact-ui.svg
[npm-url]: https://www.npmjs.com/package/@ankjs/react-ui

[downloads-image]: https://img.shields.io/npm/dm/%40ankjs%2Freact-ui.svg
[downloads-url]: https://www.npmjs.com/package/@ankjs/react-ui



___
## 🖥️ Installation

  ```brush
      npm install @ankjs/react-ui
      or
      yarn add @ankjs/react-ui
  ```

___

> [!NOTE] 
<mark><b>If you want to use all the features of the theme or apply it automatically All components, do this
</b></mark>


## Create Colors Object 

<details>
  <summary>
   <b>
     use in bulid background colors object
   </b>
  </summary>
   
    📜 currently available on colors object 
    
      primary,
    primaryDeep,
    primaryColor,
    pageBg,
    mainBgColor,
    backgroundColor,
    secondryBgColor,
    color',
    buttonBgActive,
    buttonColorActive,
    buttonBgDeactivate,
    buttonColorDeactivate,
    inputColorActive,
    inputColorDeactivate,
    inputBgActive,
    inputBgDeactivate,
</details>



----



<details>
  <summary>
   <b>
     I want use won custom colors object 
   </b>
  </summary>
  

  <mark>
    <b>
      ** if use default color as its then ignore step 1 or 2
   </b>
  </mark>

1. create a folder in 📂 `src` folder

   ```brush
       $ mkdir constants
   ```

2. 📂 `constants` in create object like this

    ```javascript
        export const colors = {
          light : {
            primary : '# won color ' // brand color 
            backgroundColor : '# won color', // base background color 
            pageBg : '# won color ' // for all page PageView components 
            color : '# won color', //  text color 
          },
          dark:{
            // property same but value change 
            // important never use same value 
          },
          system:{
            // property same but value change 
            // important never use same value 
          }
        }
      
    ```
</details>


## 🔌 Theme Provider 

  ```javascript
    // App.js
    // React context like use
    import {AnkThemeProvider} from '@ankjs/react-ui';
    
    // if use  won colors object
    // import { colors } from './constants/colors.js';
    
    const App =  ()=>{
      
      return (
        <AnkThemeProvider
          // colorsObject={colors} if use 
        >
          ...
          
        </AnkThemeProvider>
      )
    }
  ```
  
  [••• Click to See More details >>> ](./RTHEMEProvider.md)
  
  ___
## 🪟 Components 
   1. [**ThemeSwitchButton**](./RCThemeSwitchButtom.md)
   
   2. [**PageView**](./RCPageView.md)
   
   3. [**Input**](./RCInput.md)
   



## 🪝 Hooks

   1. [**useThemeColors**](./RHuseTheColors.md)
   
   3. [**useLocalStorage**](./RHuseLocalStorage.md)
  
   4. [**useWebDimensions**](./RHuseWebDimensions.md)
   
   5. [**useElementDimensions**](./RHuseElementDimensions.md)
   
   6. [**useScrollPosition**](./RHuseScrollPosition.md)
   
   

## 🌈 Contexts

   1. [**AnkThemeContext**](./RCNThemeContext.md)


## 🎡 Core functions

   1 **getRandomUserId,**
   2. **getRandomId,**
   3. **getNumInRange,**
   4. **getRandomText,**
   5. **getRamdomKey**
   6. **emailHideWithSymbol,**
   7. **emailHide,**
   8. **arrayToOneString**
   9. **arrayFindBoolean**
   10. **capatilcapitizeFirstLetter**

    
  [**See details**](https://www.npmjs.com/package/ankhema)

_______

## 🔗 Links 

[👕 Go To Theme Switch Button ](./RCThemeSwitchButton.md)
_____
## PLEASE HELP TO IMPROVE !!
THANKS FOR WATCHING 🙏 
______
  
<details>
  <summary>
  </summary>
  
  
      |||||||||||||||||||_ ||||____|_____||||||||||
      ||||| ____  ___   / /__ /__  /, __ / ||||||||
      |||  / __ `/ __ \/ //_/   / /\_  \ ||||||||||
      ||| / /_/ / / / / ,<  ___/ /___/ / ||||||||||
      ||| \__,_/_/ /_/_/|_|/____/\__,_/  ||||||||||
      |||||||||||||||||||||||||||||||||||||||||||||
      

</details>