# Timer Application

This small web application serves as a learning and practice ground for honing HTML, CSS, and JavaScript skills. The primary focus of each language in this project is outlined below:

HTML:

Emphasis on accessibility tools, utilizing aria-label attributes on selected elements. Implementation of the sr-only class on spans to insert custom texts exclusively read by screen readers.

CSS:

Timer app featuring both light and dark modes. Usage of control CSS classes, exemplified by the sr-only class, and additional control classes for displaying icons. Adoption of CSS variables for colors, following a standardized nomenclature akin to Tailwind CSS. Implementation of the clamp function in the :root pseudo-class to ensure application responsiveness.

JavaScript:

Practice in frontend event handling with JS.
Creation and manipulation of application logic through states, detailed in the exported state file.
Example state:

```
export default {
  minutes: 0,
  seconds: 0,
  isRunning: false,
  isMute: true,
  countdownId: null,
};

```

Modular organization of the application, dividing it into blocks with distinct responsibilities.
While the application may not demand extensive modularization, this structuring allows for the showcase of each JS file's competencies and the practice of a directory structure resembling that of a more complex application, albeit on a smaller scale.

## Color documentation

| Color                     | Hexadecimal |
| ------------------------- | ----------- |
| --bg-color (dark mode)    | #121214     |
| --bg-color (light mode)   | #f8f8fc     |
| --text-color (dark mode)  | #f8f8fc     |
| --text-color (light mode) | #121214     |
| --primary-color           | #42d3ff     |
| --controls-bg-color       | #242424     |

## Deploy

This application is deployed on Netlify. You can access it [here](https://personalfocustimer.netlify.app/).

Feel free to experiment and provide feedback or suggestions using the contact details below.

## 🔗 Contacts

[![email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:felipelacerda500@gmail.com)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/felipelacerda500)

## Author

Felipe Lacerda Fernandes de Assis
