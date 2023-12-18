import { v4 as uuid } from 'uuid';

export const generateRandomId = () => {
    const randomId = uuid();
    return randomId;
  };