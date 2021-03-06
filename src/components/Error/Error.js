import { ROOT__INDEX } from '../../constants/root';

import classes from './Error.css';

class Error {

  render() {
    const htmlWrapper = `
      <div class="${classes.error__container}">
        <span>
          <p class="${classes.error__alert}">Произошла ошибка</p>
          <p class="${classes.error__alert}">Попробуйте зайти позже, пожалуйста</p>
        </span>
      </div>
    `;

    ROOT__INDEX.innerHTML = htmlWrapper;
  }
}

export default new Error();